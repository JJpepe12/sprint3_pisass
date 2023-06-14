import React, { useEffect, useState, useContext } from "react";
import { Card, Box, HStack, Input, Button, useNumberInput, Stack, Image, CardBody, Icon } from '@chakra-ui/react';
import { RiShoppingBasket2Line } from "react-icons/ri";
import { ChakraProvider } from "@chakra-ui/provider";
import { Comments, Feedback, Avatar, Text, Stars, StarIcon } from "./StylesDetails";
import { Navigate, useParams } from "react-router";
import { PizzaContext } from "../../context/PizzasProvider";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../context/CartProvider";

const Details = () => {
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
                top="-40px"
            ></Box>
            ),
        };

    const [infoPiza, setInfoPiza] = useState(null);

    // contexto de pizzas
    const pizzaData = useContext(PizzaContext);
    console.log(pizzaData);

    // contexto del carrito
    const { unidsPizza, setUnidsPizza } = useContext(CartContext);

    // Hook de efecto para traer la info de la pizza
    useEffect(() => {
      const getInfoPizza = JSON.parse(sessionStorage.getItem("infoPiza"));
      setInfoPiza(getInfoPizza || {});
    }, []);

    const { pizzaname, descriptions, price, img, img2, img3 } = infoPiza ?? {}

    let { pizzaid } = useParams()

    const pizzaSelected = pizzaData
      ? pizzaData.find((product) => product.id === pizzaid) : [];
    console.log(pizzaSelected);

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 0,
        max: 10,
        })
    
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    const pizzaUnids= input.value
    console.log(pizzaUnids)

    // Hook de navegación para direccionar a detalles de la compra
    const navigate = useNavigate();
    const goPurchase = () => {
    navigate(`/purchases`)
    }

    const handlePayButtonClick = () => {
        const pizzaUnids = input.value; // Obtener el valor actualizado aquí
        setUnidsPizza(() => pizzaUnids); // Usar una función de actualización
        console.log("Valor de unidsPizza en el contexto:", pizzaUnids); // Mostrar el valor actualizado
        Swal.fire(`Pizza seleccionada: ${pizzaname} - Unidades: ${pizzaUnids}`);
        navigate(`/purchases`);
        };


    return (
        <ChakraProvider >
            <Box bg="#FF2153">
                <Stack onClick={() => navigate("/search")} direction="row" align="center" paddingTop="20px" color="white" _hover={{ cursor: "pointer" }}>
                    <Icon as={ChevronLeftIcon} boxSize={20}  />
                    <p>Regresar a Buscar</p>
                </Stack>
                <Card maxW="sm" bottom="-10px" padding="12">
                    <CardBody>
                        <Slider {...settings}>
                        <div>
                            <Box position="relative">
                            <Image
                                src={img}
                                alt={pizzaname}
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
                                top="80px"
                                gap="1.5rem"
                                padding="40px"
                            >
                            </Stack>
                            </Box>
                
                
                        </div>
                        {img2 && (
                            <div>
                            <Box position="relative">
                                <Image
                                src={img2}
                                alt={pizzaname}
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
                                top="80px"
                                gap="1.5rem"
                                padding="40px"
                            >
                            </Stack>
                            </Box>
                            </div>
                        )}
                        {img3 && (
                            <div>
                            <Box position="relative">
                                <Image
                                src={img3}
                                alt={pizzaname}
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
                                top="80px"
                                gap="1.5rem"
                                padding="40px"
                            >
                            </Stack>
                
                            </Box>
                            </div>
                        )}
                        </Slider>
                    </CardBody>
                    </Card>

                    <Comments>
                    <h1>{pizzaname}</h1>
                    <div>
                        <Button
                            borderRadius="18px"
                            backgroundColor="#FF2153"
                            w="88px"
                            h="35px"
                            color="white"
                            mt={-20}
                            >
                            {price}
                        </Button>
                        <Button
                            borderRadius="18px"
                            backgroundColor="#F1A548"
                            w="110px"
                            h="35px"
                            color="white"
                            mt={-20}
                            ml={20}
                            >
                            445 Reviews
                        </Button>
                    </div>
                    <h4>Descripción</h4>
                    <h6>{descriptions}</h6>
                    <Feedback>
                    {infoPiza && infoPiza.comments && (
                        <>
                        <Avatar src={infoPiza.comments.img} alt={infoPiza.comments.name} />
                        <h4>{infoPiza.comments.name}</h4>
                        <Stars>
                            <StarIcon>★</StarIcon>
                            <StarIcon>★</StarIcon>
                            <StarIcon>★</StarIcon>
                        </Stars>
                        <Text>{infoPiza.comments.comment}</Text>
                        </>
                    )}
                    </Feedback>
                    </Comments>
                
                    <Box display="flex" alignItems="center" justifyContent="space-evenly" color="white" p="10px">
                        <HStack marginLeft="15px">
                            <Button {...dec}>-</Button>
                            <Input htmlSize={5} width='auto' bg="#ff2153" textAlign="center" {...input} />
                            <Button {...inc}>+</Button>
                        </HStack>
                        <Button>
                        <RiShoppingBasket2Line
                            fontSize="1.8rem"
                            style={{ backgroundColor:"#ff2153", fill: "white" }}
                        />
                        </Button>
                        <Button onClick={handlePayButtonClick}
                            mr="15px" fontSize="1rem" width={50}
                            _hover={{background: "white", color: "black",}}
                            >
                        Pagar
                        </Button>
                    </Box>
            </Box>
        </ChakraProvider>
    );
};

export default Details;
