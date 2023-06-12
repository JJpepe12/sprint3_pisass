import React, { useEffect, useState } from "react";
import { Card, Box, HStack, Input, Button, useNumberInput} from '@chakra-ui/react';
import { get } from '../../services/usuarioServices'
import DetailsPizzas from "../../components/detailsPizzas/DetailsPizzas";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { ChakraProvider } from "@chakra-ui/provider";
import { Comments, Feedback, Avatar, Text, Stars, StarIcon} from "./StylesDetails";
import Avatar1 from '../../assets/img/avatar_paola.jpg'

const Details = () => {
      // Hook de efecto para traer la info de la pizzas
    const [products, setProducts] = useState([]);
    const [descriptions, setDescription] = useState([]);
    // const [comments, setComments] = useState([]);

    const getProducts = async() => {
        const getproducts = await get('products');
        setProducts(getproducts);
    }

    const getDescription = async() => {
        const getdescription = await get('products');
        setDescription(getdescription);
    }
    useEffect(() => {
        getProducts();
        getDescription();
    }, []);

    // const getComments = async() => {
    //     const getcomments = await get('products');
    //     setComments(getcomments);
    // }
    // useEffect(() => {
    //     getComments();
    // })

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
            <Box bg="#ff2153">
                <Card>
                    {products.map((product) => (
                    <DetailsPizzas key={product.id} product={product}>
                    </DetailsPizzas>
                    ))}
                </Card>

                <Comments>
                        <h1>Descripción</h1>
                    {descriptions.map((description) => (
                    <p key={description.id} description={description}>
                    </p>
                ))}
                    <Feedback>
                        <Avatar src={Avatar1} alt="Paola" />
                        {/* {comments.map((comment) => (
                        <h1>key={comment.id} comment={comment}
                        </h1>
                ))} */}
                        <h1>Paola Torres</h1>
                        <Stars>
                            <StarIcon>★</StarIcon>
                            <StarIcon>★</StarIcon>
                            <StarIcon>★</StarIcon>
                        </Stars>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
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
                    <Button mr="15px" fontSize="1rem" width={50}
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
