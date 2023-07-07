import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer parrafo={<p className='parrafo-ItemListContainer'>Aca viene el catalogo de productos</p>} />
    </div>
  );
}

export default App;
