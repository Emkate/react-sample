import React from 'react';
import {
  TableHead,
  TableRow,
  TableHeader
} from 'carbon-components-react';

function ItemsListHeaders({ getHeaderProps, headers }) {
  return (
    <TableHead>
      <TableRow>
        {headers.map(header => (
          <TableHeader {...getHeaderProps({ header })} isSortable={!header.preventSorting}>
            {header.header}
          </TableHeader>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default ItemsListHeaders;