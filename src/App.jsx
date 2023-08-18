import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto } from './components/Contacto';
import Carrito from './components/Carrito';
import { CartProvider } from './Context/CartContext';
import { Checkout } from './components/Checkout';
import copyright from './copyright.svg';


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:category' element={<ItemListContainer />} />
            <Route path='item/:id' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <div className="col-md-12 text-center">
        <p>Todos los derechos reservados <img width="25" src={copyright} alt="Logo copyright" />ARB</p>
      </div>
    </div>
  );
}

export default App;
