import React, { Component, Fragment } from "react";
import ItemDetailsForm from './ItemDetailsForm';
import Loader from '../Loader';
import { HttpService } from "../../services/HttpService";

class ItemDetailsNew extends Component {
  constructor(props) {
    super(props);
    this.httpService = new HttpService();

    const itemDetails = props.fields.reduce((sum, next) => {
      return { ...sum, [next.key]: '' };
    }, {})

    this.state = {
      itemDetails,
      lockView: false
    }
  }

  saveItem(event) {
    this.setState({ lockView: true });

    const itemURL = `https://testdb-a0af.restdb.io/rest/${this.props.entityName}`;
    event.preventDefault();
    this.httpService.post(itemURL, this.state.itemDetails).subscribe(() => {
      this.props.historyContext.push(`/${this.props.entityName}/list`);
    })
  }

  changeInput(event) {
    this.setState({
      itemDetails: {
        ...this.state.itemDetails,
        [event.currentTarget.name]: event.currentTarget.value
      }
    })
  }

  render() {
    if (this.state.lockView) {
      return <Loader></Loader>
    }

    const { entityName } = this.props;
    const title = entityName.substring(0, entityName.length - 1);
    const editableFields = this.props.fields.filter(field => (
      !['id', 'actions'].includes(field.key) && field.type
    ));

    return (
      <Fragment>
        <h1>New {title}</h1>
        <ItemDetailsForm
          itemData={this.state.itemDetails}
          submitForm={this.saveItem.bind(this)}
          changeInputValue={this.changeInput.bind(this)}
          fields={editableFields}
        ></ItemDetailsForm>
      </Fragment>
    );
  }
}

export default ItemDetailsNew;