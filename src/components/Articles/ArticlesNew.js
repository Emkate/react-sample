import React from 'react';
import ItemDetailsNew from '../ItemDetails/ItemDetailsNew';
import { headers } from './articlesHeaders';

function ArticlesNew(props) {
  return (
    <ItemDetailsNew
      entityName="articles"
      historyContext={props.history}
      fields={headers}
    ></ItemDetailsNew>
  )
}

export default ArticlesNew;