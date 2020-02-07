import React from 'react';
import { TableToolbar, TableToolbarSearch } from 'carbon-components-react'

function ItemsListToolbar({ filterValue, onFilterValueChange }) {
  return (
    <TableToolbar>
      <TableToolbarSearch
      value={filterValue}
      onChange={onFilterValueChange}
      />
    </TableToolbar>
  );
}

export default ItemsListToolbar;