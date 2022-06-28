import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        내용
        <Welcome username="유관우"></Welcome>
        <h1>test</h1>
      </header>
    </div>
  );
}

export default App;
