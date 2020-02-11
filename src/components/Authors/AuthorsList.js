import React from 'react';
import ItemsList from "../ItemsList/ItemsList";
import { headers } from './authorsHeaders';

function AuthorsList(props) {
  return (
    <ItemsList entityName="authors" headers={headers}>
    </ItemsList>
  )
}

export default AuthorsList;