import { useHistory } from "react-router-dom"
import { Button } from 'carbon-components-react';
import { Add32 } from '@carbon/icons-react';
import React from 'react';
import './ItemAddButton.scss';

function ItemAddButton(props) {
  let history = useHistory();

  function handleRedirect() {
    history.push(`/${props.entityName}/newItem`);
  }

  return (
    <div className="align-right">
      <Button
        onClick={handleRedirect}
        renderIcon={Add32}
      >
        New item
      </Button>
    </div>
  );
}

export default ItemAddButton;