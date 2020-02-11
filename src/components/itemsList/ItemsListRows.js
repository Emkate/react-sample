import React from 'react';
import { TableBody, TableRow, TableCell, OverflowMenu, OverflowMenuItem } from "carbon-components-react";
import { HttpService } from '../../services/HttpService';
import { useHistory } from 'react-router-dom';


function ItemsListRows({ rows, entityName }) {
  const httpService = new HttpService();
  const history = useHistory();

  function deleteItem(itemId) {
    const deleteURL = `https://testdb-a0af.restdb.io/rest/${entityName}/${itemId}`;
    httpService.delete(deleteURL).subscribe(() => {
      history.push('/empty')
      setTimeout(() => {
        history.push(`${entityName}/list`);
      })
    })
  }

  return (
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
            {row.cells.map(cell => {   
              if (cell.info.header === 'actions') {
                return (
                  <TableCell key={cell.id}>
                    <OverflowMenu>
                      <OverflowMenuItem itemText="Edit" href={`/${entityName}/edit/${row.id}`}/>
                      <OverflowMenuItem itemText="Delete" onClick={() => deleteItem(row.id)}/>
                    </OverflowMenu>
                  </TableCell>
                )
              }
              return (<TableCell key={cell.id}>{cell.value}</TableCell>);
            }
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ItemsListRows;