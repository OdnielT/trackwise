import "./App.css";
import { Navbar } from "./Components/Navbar";
import AddTask from "./Components/AddTask";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
          <TaskList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
