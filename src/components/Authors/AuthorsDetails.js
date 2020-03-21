import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import { headers } from './authorsHeaders';

function AuthorsDetails(props) {
  const itemId = props.match.params.itemId;
  return (
    <ItemDetails
      entityName="authors"
      itemId={itemId}
      historyContext={props.history}
      fields={headers}
    ></ItemDetails>
  )
}

export default AuthorsDetails;