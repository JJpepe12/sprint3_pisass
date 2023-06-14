import React, { createContext, useState, useEffect } from "react";
import { get } from "../services/usuarioServices"
export const PizzaContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState(null);

  const getPizzas = async() => {
    const getpizzas = await get('products');
    setPizzaData(getpizzas);
    }
    //   Hook de effecto para traer la info de la pizzas 
    useEffect(() => {
        getPizzas();
    } , [])

  return (
    <PizzaContext.Provider value={pizzaData}>
      {children}
    </PizzaContext.Provider>
  );
}