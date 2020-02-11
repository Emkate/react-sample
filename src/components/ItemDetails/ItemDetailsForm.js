import React from 'react';
import { Form, FormGroup, TextInput, TextArea, Button } from 'carbon-components-react';
import Loader from '../Loader';

function ItemDetailsForm ({ itemData, submitForm, changeInputValue }) {
  if (!itemData) {
    return (<Loader></Loader>);
  }
  return (
    <Form
      className="some-class"
      onSubmit={submitForm}
    >
      <FormGroup legendText="">
        <TextInput
          helperText=""
          id="title"
          name="title"
          labelText="Title"
          light={false}
          onChange={changeInputValue}
          onClick={function noRefCheck(){}}
          value={itemData.title}
          required
        />
      </FormGroup>
      <FormGroup legendText="">
        <TextArea
          className="some-class"
          cols={50}
          disabled={false}
          helperText=""
          id="body"
          name="body"
          labelText="Description"
          rows={4}
          value={itemData.body}
          onChange={changeInputValue}
        />
      </FormGroup>
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