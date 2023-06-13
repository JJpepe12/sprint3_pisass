import {
    Box,
    ChakraProvider,
    Flex,
    Icon,
    Text,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Stack,
    InputGroup,
    Avatar,
    InputLeftAddon,
    InputRightElement
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { post } from '../../services/usuarioServices';


const NewUsers = () => {
    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .min(2, "El nombre debe contener mínimo 2 caracteres")
            .required('El nombre de usuario es obligatorio'),
        fullName: Yup.string()
            .min(2, "El nombre debe contener mínimo 2 caracteres")
            .required('Tu nombre completo es obligatorio'),
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const initialValues = {
        userName: '',
        password: '',
        fullName: '',
        avatar: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        
      onSubmit: async (values, { setSubmitting }) => {
       
            console.log("valores", values);
            // Realizar acción con los datos del formulario
            try {
                // Realizar acción con los datos del formulario

                // Enviar los datos al servidor utilizando la función update
                const response = await post('/ussers', values);

                // Verificar si la solicitud fue exitosa
                if (response) {



                    // Mostrar la alerta y redirigir al Login
                    Swal.fire({
                        title: '¡Datos enviados!',
                        text: 'Los datos del formulario han sido enviados exitosamente.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/");
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

    return (
        <ChakraProvider>
            <Box backgroundColor="#fadce7" alignItems="center" justifyContent="center" paddingLeft="35px" maxW="375px">
                <Stack onClick={() => navigate("/")} direction="row" align="center" marginBottom="1rem" paddingTop="20px" _hover={{ cursor: "pointer" }}>
                    <Icon as={ChevronLeftIcon} boxSize={5} color="#FF2153" />
                    <Text>
                        Regresar a Login
                    </Text>
                </Stack>

                <Avatar m="3%" left="34%" size='lg' bg='#FF2153' icon={<AiOutlineUserAdd fontSize='2rem' />} />

                <Stack marginBottom="1.5rem" paddingTop="20px" fontWeight="bold">
                    <Text fontWeight="bold">
                        Registrar nuevo usuario
                    </Text>
                </Stack>

                <form onSubmit={formik.handleSubmit} position="absolute">
                    <Flex overflow="wrap" flexWrap="wrap" alignContent="start" flexDirection="column">
                        <div>
                            <Stack spacing={5} alignItems="left" width="300px">
                                <FormLabel htmlFor="userName" color="black" fontSize="small" marginBottom="-13px" width="100%" fontWeight="bold">
                                    Nombre de usuario
                                </FormLabel>
                                <InputGroup>
                                    <Input display="flex" alignItems="center" type="text" color="black" bg="white" placeholder='Ingresa tu nombre de usuario' _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('userName')} />
                                    <FormErrorMessage position="absolute">{formik.touched.userName && formik.errors.userName && <div>{formik.errors.userName}</div>}</FormErrorMessage>
                                </InputGroup>

                                <FormLabel htmlFor="password" color="black" fontSize="small" marginBottom="-13px" width="100%" fontWeight="bold">
                                    Contraseña
                                </FormLabel>
                                <InputGroup>
                                    <Input display="flex" alignItems="center" type={show ? 'text' : 'password'} color="black" bg="white" placeholder='Ingresa tu contraseña' _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('password')} />
                                    <FormErrorMessage position="absolute">{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
                                    <InputRightElement width='5.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Ocultar' : 'Mostrar'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>

                                <FormLabel htmlFor="fullName" color="black" fontSize="small" marginBottom="-13px" width="100%" fontWeight="bold">
                                    Nombre Completo
                                </FormLabel>
                                <InputGroup>
                                    <Input display="flex" alignItems="center" type="text" color="black" bg="white" placeholder='Ingresa tu nombre completo' _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('fullName')} />
                                    <FormErrorMessage position="absolute">{formik.touched.fullName && formik.errors.fullName && <div>{formik.errors.fullName}</div>}</FormErrorMessage>
                                </InputGroup>

                                <FormLabel htmlFor="avatar" color="black" fontSize="small" marginBottom="-13px" width="100%" fontWeight="bold">
                                    Ingresa la URL de tu imagen
                                </FormLabel>
                                <InputGroup>
                                    <InputLeftAddon p={2} children='https://' />
                                    <Input display="flex" alignItems="center" type="text" color="black" bg="white" placeholder='Link de tu avatar' _placeholder={{ color: 'gray', fontSize: "small" }} {...formik.getFieldProps('avatar')} />
                                    <FormErrorMessage position="absolute">{formik.touched.avatar && formik.errors.avatar && <div>{formik.errors.avatar}</div>}</FormErrorMessage>
                                </InputGroup>

                            </Stack>
                            <Button left="26%" width='50%' size='lg' mt={7} colorScheme='white' bg="#FF2153" type="submit" boxShadow="0px 9px 5px rgba(0, 0, 0, 0.2)" marginBottom="20px"
                                _hover={{ cursor: "pointer" }}
                                disabled={formik.isSubmitting || isFormSubmitted}
                            >
                                Regístrate
                            </Button>
                        </div>
                    </Flex>
                </form>
            </Box>
        </ChakraProvider>
    );
}

export default NewUsers;