import React from "react";
import {
    Button,
    Card,
    CardBody,
    Image,
    Stack,
    Text,
    Box,
} from "@chakra-ui/react";

const DetailsPizzas = ({ product }) => {
    return (
    <Box>
    <Card maxW="xl" bottom="0" padding="0">
        <CardBody>
        <Box position="relative">
            <Image
            src={product.img}
            alt={product.pizzaname}
            width={375}
            height={200}
            />
            <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            top="0"
            bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
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
            >
                {product.price}
            </Button>
            </Stack>
        </Box>
        </CardBody>
    </Card>
    <Box>
        
    </Box>
    </Box>
    );
};

export default DetailsPizzas;
