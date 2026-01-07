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

  const [cart, setCart] = useState([]);

  return <></>;
}

export default ShoppingCart;
