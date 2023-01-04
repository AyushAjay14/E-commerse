import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart'
import {Route , Routes , BrowserRouter , Navigate} from "react-router-dom";
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux';
function App() {
  const user = useSelector(state=> state.user.currentUser);
  return (
  <>  
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />} basename='/' />
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/:catagory" element={<ProductList />} />
          <Route path="/products/" element={<ProductList />} />
          <Route path="/login" element={user ? <Navigate replace to= "/"/> : <Login/>} />
          <Route path="/register" element={user ? <Navigate replace to= "/"/> : <Register/>} />
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
