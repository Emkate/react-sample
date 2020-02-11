import React from 'react';
import {
  TableHead,
  TableRow,
  TableHeader
} from 'carbon-components-react';
import { headers } from './headers';

function ItemsListHeaders({ getHeaderProps }) {
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