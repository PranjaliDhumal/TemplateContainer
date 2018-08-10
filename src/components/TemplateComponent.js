import React from "react";
import {
  Input,
  Form,
  Label,
  Search,
  Grid,
  Checkbox,
  Button
} from "semantic-ui-react";

export default class TemplateComponent extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.createOnSubmit();
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Grid columns={2} divided>
          <Grid.Column>
            <Form.Field>
              <label>Template Name</label>
              <Input
                onChange={this.props.handleOnChange}
                name="templateName"
                placeholder="Type Name"
              />
              <br />
            </Form.Field>
            <Form.Field>
              <label>Active Indicator</label>
              <Checkbox
                toggle
                defaultChecked
                //checked={this.props.activeInd === "Y" ? true : false}
                //onChange={this.props.checkActiveIndicator}
              />
            </Form.Field>
            <Button
              labelPosition="right"
              icon
              floated="right"
              color="orange"
              type="submit"
            >
              Save Entity
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}
