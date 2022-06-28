import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
