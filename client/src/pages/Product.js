import React , {useState , useEffect} from "react";
import Navbar from "../components/Navbar";
import Community from '../components/Community'
import Footer from '../components/Footer'
import {useLocation} from 'react-router-dom';
import {publicRequest} from '../requestMethod';
import {useDispatch} from 'react-redux'
import { addProduct } from "../redux/cartRedux";
function Product() {
  const dispatch = useDispatch();
  const [color, setcolor] = useState();
  const [size , setsize] = useState();
  const [product, setproduct] = useState({});
  const id = useLocation().pathname.split("/")[2];
  const [quantity , setquantity] = useState(1);
  useEffect(() => {
    const getProduct = async ()=>{
      try{
        const res = await publicRequest.get("/products/find/" + id);
        setproduct(res.data);
      } 
      catch(err){}    
    }
    getProduct();
  }, [id])
  
  const handleClick = ()=>{
        dispatch(addProduct({...product , color , size , quantity }))
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{paddingRight : "0%" , paddingLeft : "0%"}}>
        <div className="p-container">
          <div className="image-container">
            <img
              src={product.img}
              alt=""
            />
          </div>
          <div className="content-container">
            <div className="header">
              <h3>{product.title}</h3>
              <div className="rating">
                <i class="bx bxs-star" style={{ color: "#F7C323" }}></i>
                <i class="bx bxs-star" style={{ color: "#F7C323" }}></i>
                <i class="bx bxs-star" style={{ color: "#F7C323" }}></i>
                <i class="bx bxs-star" style={{ color: "#F7C323" }}></i>
                <i class="bx bxs-star" style={{ color: "#F7C323" }}></i>
              </div>
            </div>
            <div className="price">
              <h2>₹{product.price}</h2>
            </div>
            <div className="description">
              <p>
                {product.desc}
              </p>
            </div>
            <div className="size">
              <div className="colorpallete">
              <h4 style={{marginBottom : "0%"}}>Color</h4>
              <div className="colors">
                <ul>
                  <li style={{backgroundColor : "black"}} onClick={(e)=>{setcolor("black")}}></li>
                  <li style={{backgroundColor : "blue"}} onClick={(e)=>{setcolor("blue")}}></li>
                  <li style={{backgroundColor : "#dfa667"}} onClick={(e)=>{setcolor("#dfa667")}}></li>
                </ul>
              </div>
              </div>
              <div className="size-select">
              <h4 style={{marginBottom : "0%"}}>Size</h4>
              <select class="form-select" aria-label="Default select example" onChange={(e)=>{setsize(e.target.value)}}>
                {product.size?.map((s)=>{
                    return (
                      <option key={s}>{s}</option>
                    )
                })}
              </select>
              </div>
            </div>
            <div className="quantity" style={{alignItems : "center", display : "flex" }}>
              <button type="button" class="btn btn-light" style={{width : "4em" , margin : "0 1em"}} onClick={(e)=>{setquantity(quantity+1)}}>+</button>
              <span style={{fontSize : "1.5em"}}>{quantity}</span>
              <button type="button" class="btn btn-light" style={{width : "4em" , margin : "0 1em"}} onClick={(e)=>{quantity > 1 && setquantity(quantity-1)}}>-</button>
            </div>
            <div className="buttons">
            <button type="button" class="btn btn-dark btn1" onClick={handleClick}>Add to Cart</button>
            <button type="button" class="btn btn-light btn2">Find your Size</button>
            </div>
          </div>
        </div>
        <Community/>
        <Footer/>
      </div>
    </>
  );
}

export default Product;
