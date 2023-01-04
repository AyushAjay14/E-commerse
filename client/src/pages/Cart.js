import React , {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import logo from '../Images/Logo.png'
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
// eslint-disable-next-line
import {removeProduct , clearData} from '../redux/cartRedux';
import StripeCheckout from 'react-stripe-checkout';
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);
  const [stripeToken , setstripeToken] = useState();
  const handleCartRemove = (e)=>{
  dispatch(removeProduct(e.target.id));
  }
  // useEffect(() => {
  //   dispatch(clearData())
  // }, [])
  const KEY = process.env.REACT_APP_STRIPE;
  const onToken=(token)=>{
      setstripeToken(token);
  }
  console.log(stripeToken);
  return (
    <>
      <Navbar />
      <div className="cart-info">
      <button type="button" class="btn btn-dark btn3" style={{width : "200px" , margin : "6em 0 0 2em"}}><Link to="/products" style={{textDecoration : "none" , color : "inherit"}}>Continue Shopping.</Link></button>
      <button type="button" class="btn btn-dark btn3" style={{width : "200px" , margin : "6em 0 0 2em"}}> <Link to="/" style={{textDecoration : "none" , color : "inherit"}}>Go to Home.</Link> </button>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding : "0 0",
          flexDirection: "column",
        }}
      >
        <table className="table1">
          <thead>
            <th className="product-remove"></th>
            <th className="product-thumbnail"></th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Subtotal</th>
          </thead>
          <hr />
          <tbody style={{ height: "229px" }}>
            {cart.products?.map((item , id)=>{
              return(
                <tr>
              <td>
                <i id={id} class="bx bx-x" style={{cursor : "pointer"}} onClick={(e)=>{handleCartRemove(e)}}></i>
              </td>
              <td>
                <img
                  src={item.img?item.img : ""}
                  alt=""
                />
              </td>
              <td style={{ textAlign: "center" }}>
                <p>{item.title}</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>₹{item.price}</p>
              </td>
              <td style={{ textAlign: "center", fontSize: "1.5em" }}>
                <div className="amount-buttons">
                  <span>{item.quantity}</span>
                </div>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>₹{item.price*item.quantity}</p>
              </td>
            </tr>
              )
            })}
          </tbody>
          <hr style={{ position: "absolute", bottom: "0", top: "auto" }} />
        </table>
        <div className="total-amount">
          <h3>Cart Total</h3>
          <table className="table2">
            <tbody>
              <tr style={{borderTop : "none"}}>
                <td>
                  <p>Subtotal</p>
                </td>
                <td>
                  <p>₹{cart.total}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Shipping</p>
                </td>
                <td>
                  <p>
                    Enter your address to view shipping options. Calculate
                    shipping
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total</p>
                </td>
                <td>
                  <p>₹{cart.total}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <StripeCheckout
              name="Fashion Shop"
              image= {logo}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button type="button" class="btn btn-dark btn3" style={{width : "250px" , marginTop : "6em"}}>Proceed to Checkout</button>
            </StripeCheckout>
        </div>
        <div style = {{width : "100%" , paddingTop : "6em"}}>
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default Cart;
