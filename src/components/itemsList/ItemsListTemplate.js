import React from 'react';
import ItemsListHeaders from './ItemsListHeaders';
import ItemsListRows from './ItemsListRows';
import { DataTable } from 'carbon-components-react';
const {
  TableContainer,
  Table
} = DataTable;

function ItemsListTemplate({ filteredItems, toolbar, headers, entityName }) {
  const title = entityName[0].toUpperCase() + entityName.substring(1);
  return (
    <DataTable
      locale="en"
      size={null}
      isSortable
      headers={headers}
      rows={filteredItems}
      render={({ rows, getHeaderProps }) => (
        <TableContainer title={title}>
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