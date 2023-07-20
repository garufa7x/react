import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div>
    <NavBar />
    {/* <ItemListContainer /> */}
    <ItemDetailContainer itemId={7}/>
    </div>
  );
}

export default App;
