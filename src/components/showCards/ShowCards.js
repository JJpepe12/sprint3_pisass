import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, Image, Stack, Text, Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShowCards = ({ product }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box
        position="absolute"
        bottom="-25px"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Box>{dots}</Box>
      </Box>
    ),
    customPaging: () => (
      <Box
        bg="white"
        borderRadius="50%"
        width="8px"
        height="8px"
        marginX="5px"
        position="absolute"
        top="-30px"
      ></Box>
    ),
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleCardClick = (product) => {
    sessionStorage.setItem('infoPiza', JSON.stringify(product));
    Swal.fire(`Pizza seleccionada: ${product.pizzaname} - Precio: ${product.price}`);
    setSelectedProduct(product);

  };

  // Hook de navegación para direccionar a detalles de la pizza
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home")
  }
  return (
    <Card maxW="sm" bottom="-10px" padding="30">
      <CardBody>
        <Slider {...settings}>
          <div>
            <Box position="relative">
              <Image
                src={product.img}
                alt={product.pizzaname}
                borderRadius="10px"
                width={350}
                height={200}
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                top="0"
                bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                borderRadius="10px"
              />
              <Stack
                direction="row"
                position="absolute"
                display="flex"
                justifyContent="space-between"
                top="90px"
                gap="1.5rem"
                padding="40px"
              >
                <Text fontWeight="bold" color="white" fontSize="15px">
                  {product.pizzaname}
                </Text>
                <Button
                  borderRadius="18px"
                  backgroundColor="#FF2153"
                  w="88px"
                  h="35px"
                  fontWeight="bold"
                  color="white"
                  onClick={() => handleCardClick(product)}
                >
                  {product.price}
                </Button>
              </Stack>
            </Box>
            
            
          </div>
          {product.img2 && (
            <div>
              <Box position="relative">
                <Image
                  src={product.img2}
                  alt={product.pizzaname}
                  borderRadius="10px"
                  width={350}
                  height={200}
                />
                <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                top="0"
                bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                borderRadius="10px"
              />
              <Stack
                direction="row"
                position="absolute"
                display="flex"
                justifyContent="space-between"
                top="90px"
                gap="1.5rem"
                padding="40px"
              >
                <Text fontWeight="bold" color="white" fontSize="15px">
                  {product.pizzaname}
                </Text>
                <Button
                  borderRadius="18px"
                  backgroundColor="#FF2153"
                  w="88px"
                  h="35px"
                  fontWeight="bold"
                  color="white"
                  onClick={() => handleCardClick(product)}
                >
                  {product.price}
                </Button>
              </Stack>
            </Box>
            </div>
          )}


          {product.img3 && (
            <div>
              <Box position="relative">
                <Image
                  src={product.img3}
                  alt={product.pizzaname}
                  borderRadius="10px"
                  width={350}
                  height={200}
                />
                <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                top="0"
                bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                borderRadius="10px"
              />
              <Stack
                direction="row"
                position="absolute"
                display="flex"
                justifyContent="space-between"
                top="90px"
                gap="1.5rem"
                padding="40px"
              >
                <Text fontWeight="bold" color="white" fontSize="15px">
                  {product.pizzaname}
                </Text>
                <Button
                  borderRadius="18px"
                  backgroundColor="#FF2153"
                  w="88px"
                  h="35px"
                  fontWeight="bold"
                  color="white"
                  onClick={() => handleCardClick(product)}
                >
                  {product.price}
                </Button>
              </Stack>
               
              </Box>
            </div>
          )}
        </Slider>
      </CardBody>
    </Card>
  );
};

export default ShowCards;



// import React from 'react'
// import { Button, Card, CardBody,  Image, Stack, Text, Box } from '@chakra-ui/react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';




// const ShowCards = ({product}) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

    
//     return (
//         <>
//          <Slider {...settings}>               
//       <Card maxW='sm' bottom="-10px" padding="30">
//         <CardBody>
//           <Box position="relative">
//             <Image
//               src={product.img}
//               alt={product.pizzaname}
//               borderRadius='10px'
//               width={350}
//               height={200}
//             />
//             <Box
//               position="absolute"
//               bottom="0"
//               left="0"
//               right="0"
//               top="0"
//               bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
//               borderRadius="10px"
//             />
//            <Stack direction="row" position="absolute" display="flex"
//            justifyContent="space-between"         
//             top="90px" gap="1.5rem" padding="40px">
//               <Text fontWeight='bold'  color='white' fontSize='15px'
//              >
//               {product.pizzaname}
              
//               </Text>
//               <Button borderRadius='18px' backgroundColor='#FF2153' w='88px' h='35px' fontWeight='bold'  color='white'>
//               {product.price}
              
//               </Button>
//             </Stack>
//           </Box>
//         </CardBody>
//       </Card>

//       </Slider> 


//         </>
//     )

// }

// export default ShowCards