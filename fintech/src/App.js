import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import InputComponents from "./components/InputComponents";

function App() {
  return (
    <div className="App">
      <Welcome username="유관우"></Welcome>
      <InputComponents></InputComponents>
    </div>
  );
}

export default App;
