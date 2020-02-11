import React from 'react';
import ItemDetailsNew from '../ItemDetails/ItemDetailsNew';
import { headers } from './authorsHeaders';

function AuthorsNew(props) {
  return (
    <ItemDetailsNew
      entityName="authors"
      historyContext={props.history}
      fields={headers}
    ></ItemDetailsNew>
  )
}

export default AuthorsNew;