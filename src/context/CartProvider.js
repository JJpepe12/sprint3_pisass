
import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [unidsPizza, setUnidsPizza] = useState(0);
  const [pizzaSelected, setPizzaSelected] = useState(null);
  return (
    < CartContext.Provider value={{ unidsPizza, setUnidsPizza, pizzaSelected, setPizzaSelected }}>
    {children}
  </CartContext.Provider>
  )
}
