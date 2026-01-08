/*

Products OK!
Cart OK!

add OK!
increase OK!
decrease OK!
remove at 0 OK!
total OK!
*/

import { useState } from "react";

function ShoppingCart() {
  const products = [
    { id: 1, text: "T-shirt", price: 20 },
    { id: 2, text: "Hoodie", price: 50 },
    { id: 3, text: "Pants", price: 30 },
  ];

  const [cart, setCart] = useState([{ text: "T-shirt", id: 1, quantity: 1 }]);

  function addToCart(id, text) {
    setCart((prev) => {
      let existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { text, id, quantity: 1 }];
    });
  }
  console.log(cart);

  function increase(id) {
    setCart((prev) =>
      prev.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrease(id) {
    setCart((prev) => {
      let existingItem = prev.find((item) => item.id === id);

      if (existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      if (existingItem.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }
    });
  }

  let totalPrice = cart.reduce((sum, cur) => {
    let product = products.find((item) => item.id === cur.id);
    return sum + product.price * cur.quantity;
  }, 0);

  return (
    <>
      <button className="shopping-cart-button">🛒</button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <span className="item-quantity">{item.quantity}</span>
            <button className="increase" onClick={() => increase(item.id)}>
              Increase
            </button>
            <button className="decrease" onClick={() => decrease(item.id)}>
              Decrease
            </button>
          </li>
        ))}
      </ul>

      <p>Total: ${totalPrice}</p>
      <h3>Shopping products</h3>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.text}</span>
              <span> ${item.price}</span>
              <button onClick={() => addToCart(item.id, item.text)}>
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
