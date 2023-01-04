import React , {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useLocation} from 'react-router-dom';
import Products from "../components/Products";
function ProductList(id) {

  const cat = useLocation().pathname.split("/")[2];
  console.log(cat);
  const [filters, setfilters] = useState({});
  const [Sort, setSort] = useState();
  const handleFilters = (e)=>{
    const name = e.target.name;
    const value = e.target.value
      setfilters({
        ...filters,
        [name] : value,
      });
  }
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingRight: "0%", paddingLeft: "0%" }}
      >
        <Navbar />
        <p style={{marginBottom : "0.8em" , fontSize : "2.3em" , marginLeft : '2em', textTransform : "capitalize"}}>{cat}</p>
        <div className="sorts" style={{marginBottom : "4em", marginLeft : "5em" , marginTop : "0.5em" , display : "flex" , justifyContent : "space-between"}}>
            <div className="filter1">
            <span style={{fontSize : "1.25rem"}}>Filter Products :{" "}</span>
            <select name="color" onChange={handleFilters}>
              <option disabled>
                Color
              </option>
              <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
            </select>
            <select name="size" onChange={handleFilters} >
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
            </div>
           <div className="filter2" style={{marginRight : "2.5em"}}>
           <span style={{fontSize : "1.25rem"}}>Sort Products :{" "}</span>
            <select name="color" style={{width : "7.5em" , fontSize : "1em"}} onChange={(e)=>{setSort(e.target.value)}}>
              <option value="newest">
                Newest
              </option>
              <option  value="asc">
                Price (asc)
              </option>
              <option  value="desc">
                Price (desc)
              </option>
              </select>
           </div>
          </div>
        <div className="product-container" style={{ marginBottom: "3em" }}>
          <Products cat = {cat} filters={filters} Sort={Sort}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProductList;
