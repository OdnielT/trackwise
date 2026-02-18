import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

const TaskList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td> <Button variant="primary"><i className="bi bi-pencil-square"></i></Button>  <Button variant="primary"><i className="bi bi-trash3-fill"></i></Button></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TaskList;
