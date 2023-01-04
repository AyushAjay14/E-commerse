import React from 'react';
import logo from '../Images/Logo.png'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
function Navbar() {
  const cartquantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state=>state.user.currentUser);
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light navbar-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"> <img src={logo} alt="logo" style={{height : "50px" , paddingLeft : "3em"}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="nullnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-options" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{alignItems : "center"}}>
        {user ? <li><i class='bx bxs-user-circle' style={{fontSize : "2.2em"}}></i></li> : <> <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/login">Sign-in</Link>
        </li></>}
        <li class="nav-item" style={{padding : "0 0"}}>
          <Link class="nav-link active" to="/cart"><i class='bx bxs-cart bx-md' style={{position : "relative"}}>{cartquantity > 0 && <span class="cart-quantity">{cartquantity}</span>}</i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar