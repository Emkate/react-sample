import React, {Component} from 'react';
import './ItemsList.scss'
import { HttpService } from '../../services/HttpService';
import { map } from 'rxjs/operators';
import ItemsListTemplate from './ItemsListTemplate';
import ItemsListToolbar from './ItemsListToolbar';
import Loader from './../Loader';

class ItemsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        filteredItems: [],
        filterValue: ''
      };
      this.httpService = new HttpService();
      this.getItems();
    }

    getItems() {
      const itemsURL = 'https://testdb-a0af.restdb.io/rest/articles';
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
  
      const filteredItems = [...this.state.items].filter(({title, body}) => {
        return [title, body].join(' ').toLowerCase().includes(inputVal.toLowerCase());
      });
  
      this.setState({ filteredItems });
    }

    render() {
      const { filteredItems, filterValue } = this.state;
      if (!filteredItems.length && !filterValue) {
        return <Loader></Loader>
      }

      return (
        <ItemsListTemplate
          filteredItems={this.state.filteredItems}
          toolbar={
            <ItemsListToolbar
              filterValue={this.state.filterValue}
              onFilterValueChange={this.onInputChange.bind(this)}
            />
          }
        ></ItemsListTemplate>
      );
    }
  }

  export default ItemsList;