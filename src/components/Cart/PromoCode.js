import React from "react";

function PromoCode() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Promocode" />
        <button className="apply">Apply</button>
      </div>
      <div>
        <input type="radio" name="promo" id="first" />
        <label htmlFor="first">LUCKYUSER</label>
      </div>
      <div>
        <input type="radio" name="promo" id="first" />
        <label htmlFor="first">FIRST50</label>
      </div>
    </div>
  );
}

export default PromoCode;
