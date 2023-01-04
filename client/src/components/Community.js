import React from "react";

function Community() {
  return (
    <>
      <div className="container-liquid community">
        <div className="join-title">
          <h2>
            Join Shopping Community To{" "}
            <span
              style={{ fontStyle: "font-family: 'Secular One', sans-serif;" }}
            >
              get Monthly Promo
            </span>
          </h2>
          <p>Type your email down below and be young wild generation</p>
          <div class="input-group mb-3" style={{width : "20em"}}>
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            style={{height : "2.8em"}}
          />
          <button
            class="btn btn-dark"
            type="button"
            id="button-addon2"
            style={{width : "4.4em"}}
          >
            Send
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Community;
