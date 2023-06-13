import {
    Box,
    Card,
    CardBody,
    ChakraProvider,
    Flex,
    Heading,
    Icon,
    Image,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Stack,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import React, { useState, useContext } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { post } from '../../services/usuarioServices';
import { CartContext } from "../../context/CartProvider";
import { PizzaContext } from "../../context/PizzasProvider";



const CardPurchases = () => {
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('El Nombre Completo es obligatorio'),
        creditCardNumber: Yup.number()
            .required('El Número de Tarjeta de Crédito es obligatorio')
            .integer('El Número de Tarjeta de Crédito debe ser un número entero'),
        expirationDate: Yup.date()
            .required('La Fecha de Vencimiento es obligatoria'),
        cvv: Yup.number()
            .required('El CVV es obligatorio')
            .integer('El CVV debe ser un número entero')
            .min(100, 'El CVV debe tener exactamente 3 números')
            .max(999, 'El CVV debe tener exactamente 3 números'),
        address: Yup.string().required('La Dirección es obligatoria')
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        fullName: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: '',
        address: ''
    };

    const formik = useFormik({
        initialValues,
        validationSchema,


        onSubmit: async (values, { setSubmitting }) => {
            console.log("valores", values);
            try {
                // Realizar acción con los datos del formulario

                // Enviar los datos al servidor utilizando la función update
                const response = await post('/purchase', values);

                // Verificar si la solicitud fue exitosa
                if (response) {
                    // Mostrar la alerta y redireccionar a la página de orden
                    Swal.fire({
                        title: '¡Datos enviados!',
                        text: 'Los datos del formulario han sido enviados exitosamente.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/order");
                        }
                    });
                }
            }
            catch (error) {
                // Mostrar error en caso de que ocurra un problema con la solicitud
                console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error al enviar los datos del formulario.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }

            // Establecer isFormSubmitted en true
            setIsFormSubmitted(true);

            // Restablecer el estado de formik
            formik.resetForm();

            // Marcar el envío como completo
            setSubmitting(false);
        }

    });

    const [infoPiza, setInfoPiza] = useState(null);
    // contexto de las pizzas
    const pizzaData = useContext(PizzaContext);
    console.log(pizzaData);
    const { pizzaname, descriptions, img, comments, price, img2, img3 } = infoPiza ?? {}

    // contexto del carrito
  const { unidsPizza, setUnidsPizza } = useContext(CartContext);


    return (
        <ChakraProvider>
            <Box backgroundColor="#fadce7" alignItems="center" justifyContent="center" paddingLeft="35px" maxW="375px">
                <Stack direction="row" align="center" marginBottom="1rem" backgroundColor="#fadce7" width="%" paddingTop="20px" fontWeight="bold">
                    <Icon as={ChevronLeftIcon} boxSize={5} color="#FF2153" />
                    <Text fontWeight="bold">
                        Carrito de compras
                    </Text>
                </Stack>

                <Card direction={{ base: 'row', sm: 'row' }} overflow='hidden' variant='outline' padding='5' width="300px" height="150px">
                    <Image objectFit='cover' maxW={{ base: '30%', sm: '200px' }} src='https://i.ibb.co/qDY9TH6/pizza-tomate.jpg' alt='Caffe Latte' borderRadius="8px" />
                    <Flex>
                        <CardBody padding="0" paddingLeft="15px" justifyContent="space-between" display="flex" flexDirection="column" >
                            <Heading size="xs" color="gray">Master Super CSS Pizza</Heading>
                            <Flex justifyContent="space-between">
                                <Text py="2" fontWeight="bold">x{unidsPizza}</Text>
                                <Text py="2" fontWeight="bold" >{price} precio</Text>
                                <Text py="2" fontWeight="bold"></Text>

                            </Flex>
                        </CardBody>
                    </Flex>
                </Card>

                <Stack direction="row" align="center" marginBottom="1rem" backgroundColor="#fadce7" width="%" paddingTop="20px" fontWeight="bold">
                    <Text fontWeight="bold">
                        Información de pago
                    </Text>
                </Stack>

                <form onSubmit={formik.handleSubmit} position="absolute">
                    <Flex overflow="wrap" flexWrap="wrap" alignContent="start" flexDirection="column" spacing={10} >

                        <div>
                            <Stack spacing={4} alignItems="left" width="300px">


                                <FormLabel htmlFor="fullName" color="black" fontSize="small" marginBottom="-13px" width="100%" fontWeight="bold">
                                    Nombre Completo
                                </FormLabel>
                                <InputGroup display="flex" alignItems="center" >

                                    <Input display="flex" alignItems="center" type="text" color="gray" bg="white" placeholder='Ingresa tu nombre' _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('fullName')} />
                                    <FormErrorMessage position="absolute">{formik.touched.fullName && formik.errors.fullName && <div>{formik.errors.fullName}</div>}</FormErrorMessage>
                                    <InputLeftElement className="Input_Img" top="7px">
                                    </InputLeftElement>
                                </InputGroup>


                                <FormLabel htmlFor="fullName" color="black" fontSize="small" marginBottom="-13px" fontWeight="bold">
                                    Número de Tarjeta de Crédito
                                </FormLabel>
                                <InputGroup display="flex" alignItems="center">
                                    <InputLeftElement pointerEvents='none' top="7px">
                                    </InputLeftElement>
                                    <Input display="flex" alignItems="center" type="number" name="creditCardNumber" color="gray" bg="white" placeholder="1234 1243 1243 1243" _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('creditCardNumber')} />
                                    <FormErrorMessage position="absolute">{formik.touched.creditCardNumber && formik.errors.creditCardNumber && <div>{formik.errors.creditCardNumber}</div>}</FormErrorMessage>
                                </InputGroup>

                                <Flex direction={{ base: 'row', md: 'row' }} marginBottom="1rem" gap="16px" fontWeight="bold">
                                    <FormControl width={{ base: '50%', md: '50%' }} isInvalid={formik.touched.expirationDate && formik.errors.expirationDate}>
                                        <FormLabel htmlFor="expirationDate" color="black" fontSize="small" marginBottom="2px" fontWeight="bold">
                                            Fecha de Vencimiento
                                        </FormLabel>
                                        <InputGroup display="flex" alignItems="center">
                                            <InputLeftElement pointerEvents="none" top="7px" />
                                            <Input type="date"
                                                display="flex"
                                                alignItems="center"
                                                id="expirationDate"
                                                name="expirationDate"
                                                color="gray"
                                                bg="white"
                                                placeholder="MM/YY"
                                                _placeholder={{ color: 'gray', fontSize: 'small' }}
                                                {...formik.getFieldProps('expirationDate')}
                                            />
                                            <FormErrorMessage position="absolute">
                                                {formik.touched.expirationDate && formik.errors.expirationDate && <div>{formik.errors.expirationDate}</div>}
                                            </FormErrorMessage>
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl width={{ base: '50%', md: '50%' }} isInvalid={formik.touched.cvv && formik.errors.cvv}>
                                        <FormLabel htmlFor="cvv" color="black" fontSize="small" marginBottom="2px" fontWeight="bold">
                                            CVV
                                        </FormLabel>
                                        <InputGroup display="flex" alignItems="center">
                                            <InputLeftElement pointerEvents="none" top="7px" />
                                            <Input
                                                display="flex"
                                                alignItems="center"
                                                type="number"
                                                id="cvv"
                                                name="cvv"
                                                color="gray"
                                                bg="white"


                                                _placeholder={{ color: 'gray', fontSize: 'small' }}
                                                {...formik.getFieldProps('cvv')}
                                            />
                                            <FormErrorMessage position="absolute">
                                                {formik.touched.cvv && formik.errors.cvv && <div>{formik.errors.cvv}</div>}
                                            </FormErrorMessage>
                                        </InputGroup>
                                    </FormControl>
                                </Flex>



                                <FormLabel htmlFor="fullName" color="black" fontSize="small" marginBottom="-13px" fontWeight="bold">
                                    Dirección
                                </FormLabel>
                                <InputGroup display="flex" alignItems="center">
                                    <InputLeftElement pointerEvents='none' top="7px">
                                    </InputLeftElement>
                                    <Input display="flex" alignItems="center" type="text" name="address" color="gray" bg="white" placeholder="Eje Cra #  " _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('address')} />
                                    <FormErrorMessage position="absolute">{formik.touched.address && formik.errors.address && <div>{formik.errors.address}</div>}</FormErrorMessage>
                                </InputGroup>

                            </Stack>
                            <Button width='100%' size='lg' mt={7} colorScheme='white' bg="#FF2153" variant='solid' type="submit" boxShadow="0px 9px 5px rgba(0, 0, 0, 0.2)" marginBottom="20px"
                                _hover={{ cursor: "pointer" }}
                                //   onClick={handlePurchasesClick}
                                disabled={formik.isSubmitting || isFormSubmitted}
                            >
                                Pagar Ahora
                            </Button>
                        </div>
                    </Flex>
                </form>
            </Box>
        </ChakraProvider>
    );
}

export default CardPurchases;