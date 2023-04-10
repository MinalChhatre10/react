import "./App.css";
//import { Route, Routes } from "react-router-dom";
import NavBar from "./com/NavBar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Button
        variant="primary"
        onClick={() => {
          navigate("/about");
        }}
      >
        Primary
      </Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default App;
