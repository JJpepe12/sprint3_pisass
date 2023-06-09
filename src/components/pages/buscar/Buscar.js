import React from 'react';
import InfoUsuario from '../../infousuario/InfoUsuario';
import LogoImage from '../../../assets/img/logopizza.png';
import { ChakraProvider, Stack, Text } from '@chakra-ui/react';

const Buscar = () => {
  return (
    <ChakraProvider>
      <InfoUsuario />
      <Stack align="center" spacing={4} style={{ marginTop: '50px', position: 'relative' }}>
        <img
          src={LogoImage}
          alt="Logo Pizza"
          style={{ width: '90px', height: 'auto' }}
        />
        <Text color="gray" fontWeight="bold">
          Busca la Pizza que más te gusta
        </Text>
      </Stack>
    </ChakraProvider>
  );
};

export default Buscar;

