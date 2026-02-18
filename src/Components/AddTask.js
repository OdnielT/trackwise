import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Task Description" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTask;
