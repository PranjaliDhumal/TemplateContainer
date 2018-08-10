import React from "react";
import TemplateComponent from "./TemplateComponent";
import { Segment, Label, Button, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const datajson = [
  {
    typeId: 1,
    typeName: "Accelerators"
  },
  {
    typeId: 2,
    typeName: "Buying Roles"
  },
  {
    typeId: 3,
    typeName: "Capabilities"
  },
  {
    typeId: 4,
    typeName: "Digital Use Cases"
  },
  {
    typeId: 5,
    typeName: "Metrics"
  },
  {
    typeId: 261,
    typeName: "Recommendations"
  },
  {
    typeId: 6,
    typeName: "Data Flows"
  }
];
export default class ParentTemplate extends React.Component {
  state = {
    mode: true,
    data: datajson,
    templates: []
  };
  createOnSubmit = () => {
    let dataSubmit = {
      name: this.state.templateName,
      activeInd: "Y"
    };
    this.state.templates.push(dataSubmit);
    console.log(this.state.templateName);
    console.log(this.state.templates);
  };
  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Container>
          <Segment>
            <Label ribbon color="teal">
              Create Template
            </Label>
            <TemplateComponent
              templateName={this.state.templateName}
              handleOnChange={this.handleOnChange}
              createOnSubmit={this.createOnSubmit}
              activeInd={this.state.activeInd}
            />
            <br />
          </Segment>
          <Segment>
            <Label ribbon color="teal">
              Edit Template
            </Label>

            <br />
            <br />
          </Segment>
        </Container>
      </div>
    );
  }
}

//export default ParentTemplate;
