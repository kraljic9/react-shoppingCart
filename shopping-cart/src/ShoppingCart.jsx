/*

Products OK!
Cart OK!

add OK!
increase OK!
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

  const [cart, setCart] = useState([{ id: 1, quantity: 1 }]);

  function addToCart(id) {
    setCart((prev) => {
      let existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { id, quantity: 1 }];
    });
  }

  function increase(id) {
    setCart((prev) =>
      prev.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <>
      <h1>Shopping Cart</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span className="item-text">{item.id}</span>
            <span className="item-quantity">{item.quantity}</span>
            <button className="increase" onClick={() => increase(item.id)}>
              Increase
            </button>
            <button className="decrease">Decrease</button>
          </li>
        ))}
      </ul>

      <h3>Shopping products</h3>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.text}</span>
              <span> ${item.price}</span>
              <button onClick={() => addToCart(item.id)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
