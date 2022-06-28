import logo from "./logo.svg";
import "./App.css";

const Title = () => {
  return <h1>안녕하세요</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        내용
        <h1>test</h1>
      </header>
    </div>
  );
}

export default App;
