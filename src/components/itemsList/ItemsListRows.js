import React from 'react';
import { TableBody, TableRow, TableCell, Button } from "carbon-components-react";
import { Edit32 } from '@carbon/icons-react';


function ItemsListRows(props) {
  return (
    <TableBody>
      {props.rows.map(row => (
        <TableRow key={row.id}>
            {row.cells.map(cell => {   
              if (cell.info.header === 'actions') {
                return (
                  <TableCell key={cell.id}>
                    <Button
                      disabled={false}
                      hasIconOnly
                      onClick={function noRefCheck(){}}
                      renderIcon={Edit32}
                      iconDescription="Edit record"
                      tooltipPosition="bottom"
                      href={`/edit/${row.id}`}
                    >
                    </Button>
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