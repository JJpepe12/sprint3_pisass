import { Avatar, ChakraProvider, Stack } from '@chakra-ui/react';
import React from 'react';
import Avatar1 from '../../assets/img/avatar_paola.jpg'

const InfoUsuario = () => {
  return (
    <ChakraProvider>
      <Stack direction='row'padding="8" justify="space-between" marginBottom="-50px" align="center" >
        <Stack direction='column' gap= "0.5rem" >
        <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>Home</h1>
        <h3 style={{ color: "gray",  fontWeight: "bold" }}>¡Qué bueno verte Paola!</h3>
        </Stack>
        <Stack>
        <Avatar name='Oshigaki Kisame' src={Avatar1} alt='Avatar' size="lg" />
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default InfoUsuario;