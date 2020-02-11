import React from 'react';
import { Form, FormGroup, TextInput, TextArea, Button } from 'carbon-components-react';
import Loader from '../Loader';

function ItemDetailsForm ({ itemData, submitForm, changeInputValue, fields }) {
  if (!itemData) {
    return (<Loader></Loader>);
  }  

  function checkControlBasingOnFieldType(field) {
    switch (field.type) {
      case 'input':
        return renderInput(field);
      case 'textarea':
        return renderTextarea(field);
      default:
        return;
    }
  }

  function renderInput(field) {
    return (
      <TextInput
        id={field.key}
        name={field.key}
        labelText={field.header}
        onChange={changeInputValue}
        value={itemData[field.key]}
        required
      />
    )
  }

  function renderTextarea(field) {
    return (
      <TextArea
        cols={50}
        id={field.key}
        name={field.key}
        labelText={field.header}
        rows={4}
        value={itemData[field.key]}
        onChange={changeInputValue}
      />
    )
  }


  return (
    <Form
      className="some-class"
      onSubmit={submitForm}
    >
        {
          fields.map(field => (
            <FormGroup key={field.key} legendText="">
              {checkControlBasingOnFieldType(field)}
            </FormGroup>
          ))
        }

      <Button
        disabled={false}
        kind="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  )
}

export default ItemDetailsForm;