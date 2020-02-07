import React, {Component} from 'react';
import './ItemsList.scss'
import { HttpService } from '../../services/HttpService';
import { DataTable, Loading } from 'carbon-components-react';
import { map } from 'rxjs/operators';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableToolbar,
  TableToolbarSearch
} = DataTable;

export class ItemsList extends Component {
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
      this.httpService.get('https://jsonplaceholder.typicode.com/posts').pipe(
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
      if (inputVal === '') {
        this.setState({ filteredItems: this.state.items });

        return;
      }

      const filteredItems = [...this.state.items].filter(({title, body}) => {
        return [title, body].join(' ').toLowerCase().includes(inputVal.toLowerCase());
      });

      this.setState({ filteredItems });
    }

    render() {
      if (!this.state.filteredItems.length && this.state.filterValue === '') {
        return <div className="loader-wrapper">
          <Loading active
            small={false}
            withOverlay={false}></Loading>;  
        </div>
      }

      return (<DataTable
        locale="en"
        size={null}
        isSortable
        headers={[
          {
            header: 'ID',
            key: 'id'
          },
          {
            header: 'Title',
            key: 'title'
          },
          {
            header: 'Body',
            key: 'body'
          }
        ]}
        rows={this.state.filteredItems}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer title="DataTable">
            <TableToolbar>
              <TableToolbarSearch 
              onChange={this.onInputChange.bind(this)}
              />
            </TableToolbar>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        >
        </DataTable>
      );
    }
  }