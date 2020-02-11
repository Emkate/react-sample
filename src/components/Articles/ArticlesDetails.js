import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';

function ArticlesDetails(props) {
  const itemId = props.match.params.itemId;
  return (
    <ItemDetails
      entityName="articles"
      itemId={itemId}
      historyContext={props.history}
    ></ItemDetails>
  )
}

export default ArticlesDetails;