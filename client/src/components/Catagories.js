import React from 'react'
import Catagoryitem from './CatagoryItem'
import {catagories} from '../data'
function Catagories() {
  return (
    <div className='container arrival-container'>
    <div className="heading">
        NEW ARRIVALS
    </div>
    <div className="catagory">
      {catagories.map((item)=>{
        // eslint-disable-next-line
        return(<Catagoryitem item={item} id = {item.id} />);
      })}
    </div>
    </div>
  )
}

export default Catagories