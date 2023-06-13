import React, { useEffect, useState, useContext } from "react";
import { Card, Box, HStack, Input, Button, useNumberInput, Stack, Image, CardBody } from '@chakra-ui/react';
import { get } from '../../services/usuarioServices'
import DetailsPizzas from "../../components/detailsPizzas/DetailsPizzas";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { ChakraProvider } from "@chakra-ui/provider";
import { Comments, Feedback, Avatar, Text, Stars, StarIcon } from "./StylesDetails";
import Avatar1 from '../../assets/img/avatar_paola.jpg'
import { useParams } from "react-router";
import { PizzaContext } from "../../context/PizzasProvider";
import ShowCards from "../../components/showCards/ShowCards";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  // const [products, setProducts] = useState([]);
  // const [descriptions, setDescription] = useState([]);
  // // const [comments, setComments] = useState([]);

  // const getProducts = async() => {
  //     const getproducts = await get('products');
  //     setProducts(getproducts);
  // }

  // const getDescription = async() => {
  //     const getdescription = await get('products');
  //     setDescription(getdescription);
  // }
  // useEffect(() => {
  //     getProducts();
  //     getDescription();
  // }, []);

  // const getComments = async() => {
  //     const getcomments = await get('products');
  //     setComments(getcomments);
  // }
  // useEffect(() => {
  //     getComments();
  // })

  const [infoPiza, setInfoPiza] = useState(null);

  const pizzaData = useContext(PizzaContext);
  console.log(pizzaData);

  // Hook de efecto para traer la info de la pizza
  useEffect(() => {
    const getInfoPizza = JSON.parse(sessionStorage.getItem("infoPiza"));
    setInfoPiza(getInfoPizza || {});
  }, []);

  const { pizzaname, descriptions, img, comments, price, img2, img3 } = infoPiza ?? {}

  let { pizzaid } = useParams()

  const pizzaSelected = pizzaData
    ? pizzaData.find((product) => product.id === pizzaid) : [];
  console.log(pizzaSelected);

  // pizzaSelected.pizzaname
  // pizzaSelected.descriptions
  // pizzaSelected.img
  // pizzaSelected.comments
  // pizzaSelected.price

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 5,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <ChakraProvider>
      <Card maxW="sm" bottom="-10px" padding="30">
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
            {infoPiza && infoPiza.img2 && (
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
      <Text fontWeight="bold" color="white" fontSize="15px"> {pizzaname} </Text>
      <Comments>
        <h1>Descripción</h1>
        <p>
          {descriptions}
        </p>
        <Feedback>
          {/* <Avatar src={comments.img} alt={comments.name} />
                        <h1>{comments.name}</h1> */}
          <Stars>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
          </Stars>
          {/* <Text>
                        {comments.comment}
                        </Text> */}
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
            style={{ backgroundColor: "#ff2153", fill: "white" }}
          />
        </Button>
        <Button mr="15px" fontSize="1rem" width={50}
          _hover={{ background: "white", color: "black", }}
        >
          Pagar
        </Button>
      </Box>

    </ChakraProvider>
  );
};

export default Details;
