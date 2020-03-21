import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import { headers } from './articlesHeaders';

function ArticlesDetails(props) {
  const itemId = props.match.params.itemId;
  return (
    <ItemDetails
      entityName="articles"
      itemId={itemId}
      historyContext={props.history}
      fields={headers}
    ></ItemDetails>
  )
}

export default ArticlesDetails;