import React, { createContext, useEffect, useState } from 'react';
import { get } from '../components/services/usuarioService';


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsData = await get('products');
    setProducts(productsData);
  };

  return (
    <AppContext.Provider value={{ products }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
