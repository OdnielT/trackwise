import "./App.css";
import { Navbar } from "./Components/Navbar";
import AddTask from "./Components/AddTask";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
