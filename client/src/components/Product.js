import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
function Product({ product, id }) {
  return (
    <>
      <div
        className="product-item"
        key={id}
        onMouseEnter={(e) => {
          document.getElementsByClassName("item-hover")[id].style.opacity = 1;
        }}
        onMouseLeave={(e) => {
          document.getElementsByClassName("item-hover")[id].style.opacity = 0;
        }}
      >
        <div className="product-img">
          <LazyLoadImage
            alt="Product image"
            height={336}
            src={product.img}
            effect="blur"
            width={340}
          />
        </div>
        <div className="product-info">
          <p>{product.price}</p>
          <div className="product-title">
            <h5>{product.title}</h5>
            <ul>
              <li className="active" style={{ backgroundColor: "blue" }}></li>
              <li style={{ backgroundColor: "black" }}></li>
              <li style={{ backgroundColor: "#dfa667" }}></li>
            </ul>
          </div>
        </div>
        <div className="item-hover">
          <Link to={`/product/${product._id}`} style={{ color: "inherit" }}>
            <i
              class="bx bx-search"
              onMouseEnter={() => {
                document.getElementsByClassName("bx-search")[id].style.color =
                  "red";
              }}
              onMouseLeave={() => {
                document.getElementsByClassName("bx-search")[id].style.color =
                  "black";
              }}
            ></i>
          </Link>
          <i
            class="bx bx-heart"
            onMouseEnter={() => {
              document.getElementsByClassName("bx-heart")[id].style.color =
                "red";
            }}
            onMouseLeave={() => {
              document.getElementsByClassName("bx-heart")[id].style.color =
                "black";
            }}
          ></i>
          <i
            class="bx bx-shopping-bag"
            onMouseEnter={() => {
              document.getElementsByClassName("bx-shopping-bag")[
                id
              ].style.color = "red";
            }}
            onMouseLeave={() => {
              document.getElementsByClassName("bx-shopping-bag")[
                id
              ].style.color = "black";
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Product;
