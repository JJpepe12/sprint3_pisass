import { Avatar, ChakraProvider, Stack } from '@chakra-ui/react';
// import React from 'react';
// import Avatar1 from '../../assets/img/avatar_paola.jpg'
import { UserContext } from "../context/UserProvider"
// import React, {useContext, useEffect, useState } from "react";
import React, { useContext } from "react";

const InfoUsuario = () => {
    const getInfoUsuario = JSON.parse(sessionStorage.getItem('infoUsuario')) || {};
    const infoUsuarioArray = Object.values(getInfoUsuario);
    console.log(infoUsuarioArray);
    const userData = useContext(UserContext);

    return (
        <ChakraProvider>
            <Stack direction='row' padding="8" justify="space-between" marginBottom="-50px" align="center" >
                { infoUsuarioArray.map((user) => (
                    <div key={user.id}>
                        <Stack direction='column' gap="0.5rem" key={user.id}>
                            <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>Home</h1>
                            <h3 style={{ color: "gray", fontWeight: "bold" }}> `¡Qué bueno verte ${user.name}! Bienvenido!!`</h3>
                        </Stack>
                        <Stack>
                            <Avatar name='Oshigaki Kisame' src={user.img} alt='Avatar' size="lg" />
                        </Stack>
                    </div>
                ))}
            </Stack >
        </ChakraProvider>
    );
}

export default InfoUsuario;