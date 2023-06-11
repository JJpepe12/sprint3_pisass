import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChakraProvider } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'
// import { UserContext } from "../../Routes/AppRouter"
// import { get } from "../../services/usuarioService";
import Swal from "sweetalert2";
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
import { UserContext } from "../../context/UserProvider";




const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'El nombre de usuario debe tener al menos 3 caracteres')
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
    // const Form = ({  handleUser }) => {
 const Form = ({ }) => {
   

  
    
      // Hook de navegación para direccionar al home del usuario 
      const navigate = useNavigate();
      const goHome = () => {
        navigate("/home")
      }
    
   
    const userData = useContext(UserContext);
    console.log(userData);
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
            // handleUser(values);
            console.log("La información es válida");
            console.log("valores", values);
            sessionStorage.setItem('infoUsuario', JSON.stringify(foundUser));
            Swal.fire(
                'excelente',
                `${foundUser.name} Bienvenido!!`,
                'success'
                
            )
            // sessionStorage.setItem('idVuelo', JSON.stringify(resultado));
            // navigate("Home")
            navigate("/home")

          } else {
            console.log("La información ingresada no es válida");
            console.log("valores", values);
            Swal.fire(
                'upps',
                'Usuario no encontrado, intenta de nuevo!',
                'error'
            )
          }
          setSubmitting(false);
        },
        enableReinitialize: true
      });

 
    return (
        <ChakraProvider>
            <form  onSubmit={formik.handleSubmit} position="absolute">
                <Flex overflow="wrap" flexWrap="wrap" alignContent="start" flexDirection="column" spacing={10}>
                    <FormControl >
                        <FormLabel widht="90%" color={'white'} fontSize={"small"}>Disfruta de la mejor pizza creada para las personas amantes del código </FormLabel>
                    </FormControl>
                    <div>
                        <Stack spacing={4} alignItems="center">
                            <InputGroup display="flex" alignItems="center" >
                                <Input  display="flex" alignItems="center" variant='flushed'  type="text" name="username" color="white"  placeholder='Usuario' _placeholder={{ opacity: 1, color: 'white', fontSize:"small" }}{...formik.getFieldProps('username')}  onChange={formik.handleChange} value={formik.values.username}/>
                                <FormErrorMessage position="absolute">{formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}</FormErrorMessage>
                                <InputLeftElement className="Input_Img" top= "7px" >
                                    <AiOutlineUser color="white"/>
                                </InputLeftElement>
                                
                            </InputGroup>
                            <InputGroup display="flex" alignItems="center">
                                <InputLeftElement pointerEvents='none' top= "7px">
                                    <UnlockIcon  color="white" />
                                </InputLeftElement>
                                <Input  display="flex" alignItems="center" variant='flushed'  type="password" name="password" color="white"placeholder="Contraseña" _placeholder={{ opacity: 1, color: 'white', fontSize:"small" }}{...formik.getFieldProps('password')}/>
                                <FormErrorMessage position="absolute">{formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}</FormErrorMessage>
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