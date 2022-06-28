import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from "./components/ListComponent";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/list" element={<ListComponent></ListComponent>}></Route>
        <Route path="/axiosTest" element={<AxiosTest></AxiosTest>}></Route>
        <Route path="/news" element={<NewsApiPage></NewsApiPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
