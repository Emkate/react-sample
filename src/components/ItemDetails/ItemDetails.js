import React, { Fragment, Component } from "react";
import { HttpService } from "../../services/HttpService";
import ItemDetailsForm from './ItemDetailsForm';
import Loader from '../Loader';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    const itemId = this.props.match.params.itemId;
    this.state = {
      itemId,
      itemDetails: null,
      itemURL: `https://testdb-a0af.restdb.io/rest/articles/${itemId}`,
      lockView: false
    }

    this.httpService = new HttpService();
    this.getItemData();
  }

  getItemData() {
    this.httpService.get(this.state.itemURL).subscribe(itemDetails => {
      this.setState({ itemDetails });
    })
  }

  editItem(event) {
    this.setState({ lockView: true });

    event.preventDefault();
    this.httpService.put(this.state.itemURL, this.state.itemDetails).subscribe(() => {
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
        <h1>Item { this.state.itemId }</h1>
        <ItemDetailsForm
          itemData={this.state.itemDetails}
          submitForm={this.editItem.bind(this)}
          changeInputValue={this.changeInput.bind(this)}
        ></ItemDetailsForm>
      </Fragment>
    )
  }
}

export default ItemDetails;