/*

Products
Cart

add
increase
decrease
remove at 0
total
*/

import { useState } from "react";

function ShoppingCart() {
  const products = [
    { id: 1, text: "T-shirt", price: 20 },
    { id: 2, text: "Hoodie", price: 50 },
    { id: 3, text: "Pants", price: 30 },
  ];

  const [cart, setCart] = useState([{ id: 1, text: "T-shirt", quantity: 1 }]);

  return (
    <>
      <h1>Shopping Cart</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span className="item-text">{item.text}</span>
            <span className="item-quantity">{item.quantity}</span>
            <button className="increase">Increase</button>
            <button className="decrease">Decrease</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;
