import "./App.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
