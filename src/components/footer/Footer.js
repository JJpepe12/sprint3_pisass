import { Box,  Flex, Image, Stack, } from '@chakra-ui/react';
import React, { useState } from 'react';

import Book from '../../assets/icons/book.svg';
import Search from '../../assets/icons/search.svg';
// import Car from  '../../assets/icons/cart-basket.svg';
import FooterFondo from '../../assets/img/footer.png';
import { RiShoppingBasket2Line } from 'react-icons/ri';


const Footer = () => {
    const [activePage, setActivePage] = useState('');

    const handleSearchClick = () => {
      setActivePage('buscar');
    };
  
    const handleBookClick = () => {
      setActivePage('home');
    };



    return (

        
        <Box width="100%" height="70px" marginTop="20px" >

            <Image src={FooterFondo} alt="FooterFondo" width="100%" height="70px"
            />
            <Flex alignItems="center" justifyContent="space-between" position="relative" top="-73"
                padding="22px"
                paddingTop="2px"
            >
           <Stack direction="row" alignItems="center" _hover={{ cursor: "pointer" }} onClick={handleBookClick}>
        <Image src={Book} alt="Book" boxSize={21} maxW={20}  style={{ filter: activePage === 'home' ? "brightness(0.8)" : "none", color: activePage === 'home' ? "#FF2153" : "gray" }} />
        <h3 style={{ color: activePage === 'home' ? "#FF2153" : "gray", fontWeight: "bold" }}>Home</h3>
      </Stack>

                <Box position="relative" w={75} h={75} borderRadius="50%" bg="white" top="-70" boxShadow="0px 9px 5px rgba(0, 0, 0, 0.2)" >
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                        <RiShoppingBasket2Line fontSize="1.8rem" style={{ filter: "grayscale(100%)", fill: "#FF2153" }} />
                    </Box>
                </Box>

                <Stack direction="row" alignItems="center" _hover={{ cursor: "pointer" }} onClick={handleSearchClick}>
        <Image src={Search} alt="Search" boxSize={24} maxW={21} style={{ filter: activePage === 'buscar' ? "brightness(0.8)" : "none", color: activePage === 'buscar' ? "#FF2153" : "gray" }} />
        <h3 style={{ color: activePage === 'buscar' ? "#FF2153" : "gray", fontWeight: "bold" }}>Buscar</h3>
      </Stack>
            </Flex>
        </Box>
       
    );
};

export default Footer;
