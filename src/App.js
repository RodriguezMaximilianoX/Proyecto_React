import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"¡Bienvenido a la legión!"}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo para convertirte en gamer
        </p>
      </header>
    </div>
  );
}

export default App;
