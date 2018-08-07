import React from "react";
import { Input, Form, Label, Search } from "semantic-ui-react";

class TemplateComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  //searchRender = (this.props.data ) => {

  //};
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input label="Name" />
          <br />
          <Form.Radio toggle />
        </Form.Group>
      </Form>
    );
  }
}
export default TemplateComponent;
