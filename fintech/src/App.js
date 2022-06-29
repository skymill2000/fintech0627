import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from "./components/ListComponent";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";
import IndexPage from "./pages/IndexPage";
import AuthResult from "./pages/AuthResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/authResult" element={<AuthResult />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
