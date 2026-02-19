import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";

const TaskList = () => {
  
  const updateTask = () => {
    console.log("Updaet Task");
    setModalShow(true);
  };

  const deleteTask = () => {
    console.log("Delete Task");
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Task</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button
                variant="primary"
                className="mx-2"
                onClick={() => updateTask()}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>

              <Button variant="primary" onClick={() => deleteTask()}>
                <i className="bi bi-trash3-fill"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskList;
