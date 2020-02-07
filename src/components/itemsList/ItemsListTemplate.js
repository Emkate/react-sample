import React from 'react';
import ItemsListHeaders from './ItemsListHeaders';
import ItemsListRows from './ItemsListRows';
import { DataTable } from 'carbon-components-react';
import { headers } from './headers';
const {
  TableContainer,
  Table
} = DataTable;

function ItemsListTemplate({filteredItems, toolbar}) {
  return (
    <DataTable
      locale="en"
      size={null}
      isSortable
      headers={headers}
      rows={filteredItems}
      render={({ rows, getHeaderProps }) => (
        <TableContainer title="DataTable">
          {toolbar}
          <Table>
            <ItemsListHeaders getHeaderProps={getHeaderProps}></ItemsListHeaders>
            <ItemsListRows rows={rows}></ItemsListRows>
          </Table>
        </TableContainer>
      )}
    >
    </DataTable>
  );
}

export default ItemsListTemplate;