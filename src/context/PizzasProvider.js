import React, { createContext, useState, useEffect } from "react";
import { get } from "../../services/usuarioService"
export const PizzaContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState(null);

  const getPizzas = async() => {
    const getpizzas = await get('products');
    setPizzaData(getpizzas);
    }
    //   Hook de effecto para traer la info del usuario 
    useEffect(() => {
        getPizzas();
    } , [])

  return (
    <PizzaContext.Provider value={pizzaData}>
      {children}
    </PizzaContext.Provider>
  );
}