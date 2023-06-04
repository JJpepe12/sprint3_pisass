import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ChakraProvider } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button,
    Stack,
    InputGroup,
    InputLeftElement

} from '@chakra-ui/react'
import {
    AiOutlineUser
} from "react-icons/ai"


const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
        .max(15, 'El nombre de usuario no debe tener más de 15 caracteres')
        .required('El nombre de usuario es obligatorio'),
    password: Yup.number()
        .min(2, 'La contraseña debe tener al menos 2 caracteres')
        .required('La contraseña es obligatoria')
});

const Form = ({ username, password, handleUser }) => {
    const initialValues = {
        username: '' || username,
        password: password || ''
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            handleUser(values);
        },
        enableReinitialize: true
    })

    return (
        <ChakraProvider>
            <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" spacing={10}>
                <FormControl >
                    <FormLabel>Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
                </FormControl>
                <div>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                            />
                            <Input type="text" placeholder='Usuario' name="username" {...formik.getFieldProps('username')} />
                            <InputLeftElement>
                                <AiOutlineUser color='green.500' />
                            </InputLeftElement>
                            <FormErrorMessage>{formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}</FormErrorMessage>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <UnlockIcon color='white.300' />
                            </InputLeftElement>
                            <Input type="password" name="password" placeholder="Contraseña" {...formik.getFieldProps('password')} />
                            <FormErrorMessage>{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
                        </InputGroup>
                    </Stack>
                    <Button mt={7} colorScheme='teal' variant='outline' type="submit" disabled={formik.isSubmitting}>
                        Iniciar sesión
                    </Button>
                </div>
            </Flex >
        </ChakraProvider >
    )
}

export default Form