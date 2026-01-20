/*

Products OK!
Cart OK!

add OK!
increase OK!
decrease OK!
remove at 0 OK!
total OK!
*/

import { useEffect, useState } from "react";

function ShoppingCart() {
  const products = [
    { id: 1, text: "T-shirt", price: 20 },
    { id: 2, text: "Hoodie", price: 50 },
    { id: 3, text: "Pants", price: 30 },
  ];

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  const [display, setDisplay] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function toggleCart() {
    setDisplay(display === "none" ? "flex" : "none");
  }

  function addToCart(id, text) {
    setCart((prev) => {
      let existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { text, id, quantity: 1 }];
    });
  }
  console.log(cart);

  function increase(id) {
    setCart((prev) =>
      prev.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrease(id) {
    setCart((prev) => {
      let existingItem = prev.find((item) => item.id === id);

      if (existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
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
      <button className="shopping-cart-button" onClick={toggleCart}>
        🛒
      </button>

      <div className="cart-list-wrapper" style={{ display: display }}>
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-list-item">
              <div className="cart-item-txt">
                <span>{item.text}</span>
                <span className="item-quantity">{item.quantity}</span>
              </div>

              <div className="cart-item-btn">
                <button
                  className="increase-btn"
                  onClick={() => increase(item.id)}
                >
                  Increase
                </button>
                <button
                  className="decrease-btn"
                  onClick={() => decrease(item.id)}
                >
                  Decrease
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">Total: ${totalPrice}</p>
      </div>

      <h3 className="shopping-title">Shopping products</h3>
      <div className="products-list-wrapper">
        <ul className="products-list">
          {products.map((item) => {
            return (
              <li key={item.id} className="products-list-item">
                <div className="products-txt">
                  <span>{item.text}:</span>
                  <span> ${item.price}</span>
                </div>
                <button
                  className="addToCart-btn"
                  onClick={() => addToCart(item.id, item.text)}
                >
                  Add to cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ShoppingCart;
