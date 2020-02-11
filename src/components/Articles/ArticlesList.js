import React from 'react';
import ItemsList from "../ItemsList/ItemsList";
import { headers } from '../Articles/articlesHeaders';

function ArticlesList(props) {
  return (
    <ItemsList entityName="articles" headers={headers}>
    </ItemsList>
  )
}

export default ArticlesList;