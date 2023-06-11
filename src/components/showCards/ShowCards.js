import React from 'react'
import { Button, Card, CardBody,  Image, Stack, Text, Box } from '@chakra-ui/react';

const ShowCards = ({product}) => {
    return (
        <>
                        
      <Card maxW='sm' bottom="-10px" padding="30">
        <CardBody>
          <Box position="relative">
            <Image
              src={product.img}
              alt={product.pizzaname}
              borderRadius='10px'
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
           <Stack direction="row" position="absolute" display="flex"
           justifyContent="space-between"         
            top="90px" gap="1.5rem" padding="40px">
              <Text fontWeight='bold'  color='white' fontSize='15px'
             >
              {product.pizzaname}
              
              </Text>
              <Button borderRadius='18px' backgroundColor='#FF2153' w='88px' h='35px' fontWeight='bold'  color='white'>
              {product.price}
              
              </Button>
            </Stack>
          </Box>
        </CardBody>
      </Card>




        </>
    )

}

export default ShowCards