import React from "react";
import { Input } from "semantic-ui-react";
class TemplateComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Input disabled={!this.props.mode} />;
  }
}

export default TemplateComponent;
