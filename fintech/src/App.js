import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/list" element={<ListComponent></ListComponent>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
