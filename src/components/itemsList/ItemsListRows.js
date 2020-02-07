import React from 'react';
import { TableBody, TableRow, TableCell } from "carbon-components-react";

function ItemsListRows(props) {
  return (
    <TableBody>
      {props.rows.map(row => (
        <TableRow key={row.id}>
          {row.cells.map(cell => (
            <TableCell key={cell.id}>{cell.value}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ItemsListRows;