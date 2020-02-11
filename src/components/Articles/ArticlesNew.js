import React from 'react';
import ItemDetailsNew from '../ItemDetails/ItemDetailsNew';

function ArticlesNew(props) {
  return (
    <ItemDetailsNew
      entityName="articles"
      historyContext={props.history}
    ></ItemDetailsNew>
  )
}

export default ArticlesNew;