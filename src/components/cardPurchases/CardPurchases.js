import { Box, Button, Card, CardBody, CardFooter, ChakraProvider, Flex, Heading, Image, Stack, StackDivider, Text, border } from '@chakra-ui/react'
import React from 'react'

const CardPurchases = () => {
    return (
        <ChakraProvider >
            <Box backgroundColor="#fadce7" alignItems="center" justifyContent="center" paddingLeft="35px">
                <Card
                    direction={{ base: 'row', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    padding='10'
                    width="300px"
                    height="200px"
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '30%', sm: '200px' }}
                        src='https://i.ibb.co/qDY9TH6/pizza-tomate.jpg'
                        alt='Caffe Latte'
                        borderRadius="8px"
                    />

                    <Flex>
                        <CardBody>
                            <Heading size="xs">Master Super CSS Pizza</Heading>
                            <Flex justifyContent="space-between">
                                <Text py="2">x2</Text>
                                <Text py="2">$80,000</Text>
                            </Flex>
                        </CardBody>
                    </Flex>

                </Card>
            </Box>

        </ChakraProvider>
    )
}

export default CardPurchases