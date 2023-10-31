import React from "react";
interface Props {
  cartItems: string[];
  onClearCart: () => void;
}

const Cart = ({ cartItems, onClearCart }: Pros) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={onClearCart}>Clear</button>
    </>
  );
};

export default Cart;
