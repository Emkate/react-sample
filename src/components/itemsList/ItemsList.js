import React, {Component, Fragment} from 'react';
import './ItemsList.scss'
import { HttpService } from '../../services/HttpService';
import { map } from 'rxjs/operators';
import ItemsListTemplate from './ItemsListTemplate';
import ItemsListToolbar from './ItemsListToolbar';
import Loader from './../Loader';
import ItemAddButton from '../ItemAddButton';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: null,
      filterValue: ''
    };
    this.httpService = new HttpService();
    this.getItems();
  }

  getItems() {
    const itemsURL = `https://testdb-a0af.restdb.io/rest/${this.props.entityName}`;
    this.httpService.get(itemsURL).pipe(
      map(data => data.map(el => ({ ...el, id: String(el._id) })))
    ).subscribe(val => {
      this.setState({ items: val, filteredItems: val });
    })
  }

  onInputChange(input) {
    const inputVal = input.currentTarget
      ? input.currentTarget.value
      : '';

    this.setState({ filterValue: inputVal });

    if (!inputVal) {
      this.setState({ filteredItems: this.state.items });

      return;
    }

    const filterableFields = this.props.headers.filter(fil => !fil.preventSorting).map(el => el.key);

    const filteredItems = [...this.state.items].filter(item => {
      return filterableFields.find(field => item[field].toLowerCase().includes(inputVal.toLowerCase()));
    });

    this.setState({ filteredItems });
  }

  render() {
    const { filteredItems, filterValue } = this.state;
    if (!filteredItems && !filterValue) {
      return <Loader></Loader>
    }

    return (
      <Fragment>
        <ItemsListTemplate
          filteredItems={this.state.filteredItems}
          headers={this.props.headers}
          entityName={this.props.entityName}
          toolbar={
            <ItemsListToolbar
              filterValue={this.state.filterValue}
              onFilterValueChange={this.onInputChange.bind(this)}
            />
          }
        ></ItemsListTemplate>
        <ItemAddButton entityName={this.props.entityName}></ItemAddButton>
      </Fragment>
    );
  }
}

export default ItemsList;