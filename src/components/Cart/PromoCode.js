import React from "react";

function PromoCode() {
  return (
    <div>
      <div>
        <input type="text" placeholder="LUCKYUSER" />
        <button className="apply">Applied</button>
      </div>
      <div>
        <input type="radio" name="promo" id="first" checked />
        <label htmlFor="first">LUCKYUSER</label>
      </div>
      <div>
        <input type="radio" name="promo" id="first" disabled/>
        <label htmlFor="first">FIRST50</label>
      </div>
    </div>
  );
}

export default PromoCode;
