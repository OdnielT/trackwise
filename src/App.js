import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import AddTask from "./Components/AddTask";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Navbar />
      <AddTask />
    </Container>
  );
}

export default App;
