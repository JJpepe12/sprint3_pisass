import { Box, Button, ChakraProvider, Stack, Text } from '@chakra-ui/react'
import React, { useState } from "react";
import { useNavigate } from 'react-router';
import AnimationGift from '../../components/animationGif/AnimationGift';




const Order = () => {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState("");

    const handlePurchasesClick = () => {
        setActivePage("home");
        navigate("/home");
      };

    return (

        <ChakraProvider>
            <Box backgroundColor="#fadce7" alignItems="center" height="100%">


                <Box padding="10%" paddingTop="80px" margin="auto" width="300px">
                <AnimationGift/>
                </Box>

            <Stack direction="column" align="center" height="60vh"
              backgroundColor="#fadce7" width="%" paddingTop="20px" fontWeight="bold" >

                    <Text fontWeight="bold" fontSize="2xl">
                        Tu pedido está en proceso
                    </Text>

                    <Text fontWeight="bold" color="gray">
                        Serás notificado cuando llegue el repartidor
                    </Text>
                </Stack>


            <Button width='80' size='lg' position="relative" top="-15" 
            colorScheme='white' bg="#FF2153" variant='solid' type="submit" boxShadow="0px 9px 5px rgba(0, 0, 0, 0.2)" 
            marginLeft="30px"
             _hover={{ cursor: "pointer" }}
             onClick={handlePurchasesClick} >
               Aceptar
            </Button>

          
            </Box>

        </ChakraProvider>
    )
}

export default Order