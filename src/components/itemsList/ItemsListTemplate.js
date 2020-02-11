import React from 'react';
import ItemsListHeaders from './ItemsListHeaders';
import ItemsListRows from './ItemsListRows';
import { DataTable } from 'carbon-components-react';
const {
  TableContainer,
  Table
} = DataTable;

function ItemsListTemplate({ filteredItems, toolbar, headers, entityName }) {
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
            <ItemsListHeaders getHeaderProps={getHeaderProps} headers={headers}></ItemsListHeaders>
            <ItemsListRows rows={rows} entityName={entityName}></ItemsListRows>
          </Table>
        </TableContainer>
      )}
    >
    </DataTable>
  );
}

export default ItemsListTemplate;