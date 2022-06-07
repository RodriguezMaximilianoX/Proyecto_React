import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd = (count) =>{
    alert(`sumaste ${count} productos al carrito`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"¡Bienvenido a la legión!"}/>
        <img src={logo} className="App-logo" alt="logo" />
        <ItemCount initial={1} max={10} onAdd={onAdd} />
        <p>
          Todo para convertirte en gamer
        </p>
      </header>
    </div>
  );
}

export default App;
