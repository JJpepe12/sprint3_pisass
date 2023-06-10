
import React, {useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChakraProvider } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'
// import { UserContext } from "../../Routes/AppRouter"
// import { get } from "../../services/usuarioService";
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
import { formHome } from "./StyleForm";
import { UserContext } from "../context/UserProvider"
// import {  UserProvider } from "../context/UserProvider"

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
        .max(15, 'El nombre de usuario no debe tener más de 15 caracteres')
        .required('El nombre de usuario es obligatorio'),
    password: Yup.string()
        .min(2, 'La contraseña debe tener al menos 2 caracteres')
        .required('La contraseña es obligatoria')
});
const initialValues = {
    username: '',
    password: '',
};
// const Form = ({ username, password, handleUser }) => {
    const Form = ({  handleUser }) => {
   

    // const {  usernamec, setUsernamec, passwordc, setpassword} = useContext(UserContext); 
    // const formik = useFormik({
    //     initialValues,
    //     validationSchema,
    //     onSubmit: (values) => {
    //         handleUser(values);
    //         console.log(values);
    //     },
    //     // enableReinitialize: true
    // })

    // const formik = useFormik({
    //     initialValues,
    //     validationSchema,
    //     onSubmit: (values, { setSubmitting }) => {
    //       console.log("valores", values);
    //       setTimeout(() => {
    //         setSubmitting(false);
    //       }, 400);
    //     },
    //   });

    //   const formik = useFormik({
    //     initialValues,
    //     validationSchema,
    //     onSubmit: (values, { setSubmitting }) => {
    //         console.log("valores", values);
    //       if (
    //         values.username === usernamec &&
    //         values.password === passwordc 
    //       ) {
    //         // La información del formulario coincide con la del contexto
    //         handleUser(values);
    //         console.log(values);
    //       } else {
    //         // La información no coincide
    //         console.log('La información ingresada no es válida');
    //       }
    //       setSubmitting(false);
    //     },
    //   });
    
      // Hook de navegación para direccionar al home del usuario 
      const navigateR = useNavigate();
      const goHome = () => {
          navigateR("home")
      }
    
    //   const [users, handleUsers] = useState([]);
    //   const [ password, handlePassword] = useState([]);
    //   const getUsers = async() => {
    //     const getusers = await get('ussers');
    //     handleUsers(getusers);
    // }
    //   Hook de effecto para traer la info del usuario 
    // useEffect(() => {
    //     getUsers();
        // console.log(users);
    // })
    // const handleChangeUser = (event) => {
    //     setUsernamec(event.target.value);
    //   };
    const userData = useContext(UserContext);
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log("valores", values);
          const foundUser = userData.find(
            (user) =>
              user.usser_name === values.username &&
              user.password === values.password
          );
          if (foundUser) {
            handleUser(values);
            console.log(values);
            console.log("valores", values);
          } else {
            console.log("La información ingresada no es válida");
            console.log("valores", values);
          }
          setSubmitting(false);
        },
      });

 
    return (
        <ChakraProvider>
            <form  onSubmit={formik.handleSubmit} position="absolute">
                <Flex overflow="wrap" flexWrap="wrap" alignContent="start" flexDirection="column" spacing={10}>
                    <FormControl >
                        <FormLabel  size='xs' widht="90%" color={'white'}>Disfruta de la mejor pizza creada para las personas amantes del código </FormLabel>
                    </FormControl>
                    <div>
                        <Stack spacing={4} alignItems="center">
                            <InputGroup display="flex" alignItems="center" >
                                <Input  display="flex" alignItems="center" variant='flushed'  type="text" name="username" color="white"  placeholder='Usuario' _placeholder={{ opacity: 1, color: 'white' }}{...formik.getFieldProps('username')}  onChange={formik.handleChange} value={formik.values.username}/>
                                <FormErrorMessage>{formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}</FormErrorMessage>
                                <InputLeftElement className="Input_Img" >
                                    <AiOutlineUser  margin-bottom="-15px" color="white"/>
                                </InputLeftElement>
                                
                            </InputGroup>
                            <InputGroup display="flex" alignItems="center">
                                <InputLeftElement pointerEvents='none'>
                                    <UnlockIcon  color="white" />
                                </InputLeftElement>
                                <Input  display="flex" alignItems="center" variant='flushed'  type="password" name="password" color="white"placeholder="Contraseña" _placeholder={{ opacity: 1, color: 'white' }}{...formik.getFieldProps('password')}/>
                                <FormErrorMessage>{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
                            </InputGroup>
                        </Stack>
                        <Button  width='90%' size='lg' mt={7} colorScheme='gray' variant='solid' type="submit" disabled={formik.isSubmitting}>
                            Iniciar sesión
                        </Button>
                    </div>
                </Flex >
            </form>
        </ChakraProvider >
    )
}

export default Form