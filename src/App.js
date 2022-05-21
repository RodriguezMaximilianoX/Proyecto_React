import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gamer Legion</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo para convertirte en gamer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a>
      </header>
    </div>
  );
}

export default App;
