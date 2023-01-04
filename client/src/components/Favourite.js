import React from "react";
import trending1 from "../Images/trending1.jpg";
import trending2 from "../Images/trending2.jpg";
function Favourite() {
  return (
    <>
      <div className="container favourite-container">
        <div className="heading">Young's Favourite</div>
        <div className="trending">
          <div className="trending1">
            <img src={trending1} alt="" />
            <div className="trend-title">
              <p>Trending on instagram</p>
              <div className="trend-button">EXPLORE NOW!</div>
             <div className="arrow">
             <i class='bx bx-right-arrow-alt bx-flip-vertical bx-md' ></i>
             </div>
            </div>
          </div>
          <div className="trending1">
              <img src={trending2} alt="" />
              <div className="trend-title">
                <p>Trending on instagram</p>
                <div className="trend-button">EXPLORE NOW!</div>
                <div className="arrow">
                <i class='bx bx-right-arrow-alt bx-flip-vertical bx-md'></i>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Favourite;
