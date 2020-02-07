import React, {Component} from 'react';
import './ItemsList.scss'
import { HttpService } from '../../services/HttpService';
import { Loading } from 'carbon-components-react';
import { map } from 'rxjs/operators';
import ItemsListTemplate from './ItemsListTemplate';
import ItemsListToolbar from './ItemsListToolbar';

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
      const itemsURL = 'https://jsonplaceholder.typicode.com/posts';
      this.httpService.get(itemsURL).pipe(
        map(data => data.map(el => ({ ...el, id: String(el.id) })))
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
        return <div className="loader-wrapper">
          <Loading active
            small={false}
            withOverlay={false}></Loading>;  
        </div>
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