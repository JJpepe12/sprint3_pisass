import { Avatar, ChakraProvider, Stack } from '@chakra-ui/react';
// import React from 'react';
import Avatar1 from '../../assets/img/avatar_paola.jpg'
import React, { useState, useEffect } from 'react';

const InfoUsuario = () => {
    // const getInfoUsuario = JSON.parse(sessionStorage.getItem("infoUsuario"));
    // console.log(getInfoUsuario);

        const [infoUsuario, setInfoUsuario] = useState(null);
      
        useEffect(() => {
          const getInfoUsuario = JSON.parse(sessionStorage.getItem("infoUsuario"));
          setInfoUsuario(getInfoUsuario);
        }, []);


        const { name, img } = infoUsuario ?? {}
      
  return (
    <ChakraProvider>
      <Stack direction='row'padding="8" justify="space-between" marginBottom="-50px" align="center" >
        <Stack direction='column' gap= "0.5rem" >
        <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>Hola</h1>
        <h3 style={{ color: "gray",  fontWeight: "bold" }}>¡Qué bueno verte, {name}!</h3>
        </Stack>
        <Stack>
        <Avatar name='Oshigaki Kisame' src={img} alt='Avatar' size="lg" />
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default InfoUsuario;