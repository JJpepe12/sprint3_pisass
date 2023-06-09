// import React, {createContext, useState} from 'react';


// export const CartContext = createContext();

// export const UserContextProvider = ({ children }) => {
//     // const [cartItems, setCartItems] = useState([]);
//     const [ussers, setUssers] = useState([]);
//     const [users, handleUsers] = useState([]);
//     const addToCart = (product) => {
//         setCartItems([...cartItems, product]);
//         console.log("cart items", cartItems)
//     };

//     const removeFromCart = (productId) => {
//         const updatedCartItems = cartItems.filter(
//             (item) => item.id !== productId
//         );
//         setCartItems(updatedCartItems);
//     };

//   return (
//     <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
//         {children}
//     </CartContext.Provider>
//   )
// }