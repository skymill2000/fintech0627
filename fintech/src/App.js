import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import InputComponents from "./components/InputComponents";
import ListComponent from "./components/ListComponent";
import TopBar from "./components/common/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Welcome username="유관우"></Welcome>
      <InputComponents></InputComponents>
      <ListComponent></ListComponent>
    </div>
  );
}

export default App;
