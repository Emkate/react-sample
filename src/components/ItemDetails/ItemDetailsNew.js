import React, { Component, Fragment } from "react";
import ItemDetailsForm from './ItemDetailsForm';
import Loader from '../Loader';
import { HttpService } from "../../services/HttpService";

class ItemDetailsNew extends Component {
  constructor(props) {
    super(props);
    this.httpService = new HttpService();
    this.state = {
      itemDetails: {
        title: '',
        body: ''
      },
      lockView: false
    }
  }

  saveItem(event) {
    this.setState({ lockView: true });

    const itemURL = `https://testdb-a0af.restdb.io/rest/articles`;
    event.preventDefault();
    this.httpService.post(itemURL, this.state.itemDetails).subscribe(() => {
      this.props.history.push('/list');
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

    return (
      <Fragment>
        <h1>New item</h1>
        <ItemDetailsForm
          itemData={this.state.itemDetails}
          submitForm={this.saveItem.bind(this)}
          changeInputValue={this.changeInput.bind(this)}
        ></ItemDetailsForm>
      </Fragment>
    );
  }
}

export default ItemDetailsNew;