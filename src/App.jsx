import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:category' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
