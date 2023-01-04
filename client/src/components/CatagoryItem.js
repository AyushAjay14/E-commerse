import React from 'react'
import {Link} from 'react-router-dom';
function CatagoryItem({item}) {
  console.log(item.img);
  return (
    <>
    <div className="new-catagory">
      <Link to={`products/${item.cat}`} style={{textDecoration : "none"  , color : "inherit"}}>
        <div className="cat-img">
            <img className="cat-img" src={item.img} alt="fashion" />
        </div>
        <div className="cat-title">
            <p style={{marginBottom : "0px"}}>{item.title}</p>
        </div>
        <p className='cat-button'>EXPLORE NOW.</p>
        </Link>
    </div>
    </>
  )
}

export default CatagoryItem