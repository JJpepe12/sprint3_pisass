import React, { createContext, useState, useEffect } from "react";
import { get } from "../../services/usuarioService"
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     const response = await get("http://localhost:3000/ussers"); // Ajusta la ruta de la API según tu caso
  //     setUserData(response.data); // Actualiza el estado con los datos obtenidos de la API
  //   } catch (error) {
  //     console.error("Error al obtener los datos del usuario:", error);
  //   }
  // };
  const getUsers = async() => {
    const getusers = await get('ussers');
    setUserData(getusers);
    }
    //   Hook de effecto para traer la info del usuario 
    useEffect(() => {
    getUsers();
    } , [])

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
