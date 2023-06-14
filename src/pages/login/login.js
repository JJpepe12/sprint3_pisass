import React from "react";
import logo from "../../assets/img/logo.png"
import { PizzaHome } from "./StyleLogin";
import Form from "../../components/formLogIn/Form";
import { Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

// import { Formulario } from "../../components/formLogIn/formPrueba";

// const Login = ({ handleUser }) => {
// const Login = () => {
const Login = ({ }) => {
    
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    
    navigate("/new")
  };

    return (
        <PizzaHome>
            <figure>
                <img src={logo} alt="logo pizza" />
            </figure>
            <section>
                <h1> Inicia sesión en tu cuenta </h1>
                {/* <Form handleUser={handleUser} /> */}
                <Form />
                <h2> Restablecer contraseña </h2>
                <div>
                    <></>

                    <h5>¿No tienes una cuenta?</h5>
                    <Stack
                        direction="row"
                        alignItems="center"
                        _hover={{ cursor: "pointer" }}
                        onClick={handleRegisterClick}
                    > <Text as="h4" fontSize="md" fontWeight="bold" color="blue.500">
                            Regístrate aquí
                        </Text>
                    </Stack>



                </div>
            </section>
        </PizzaHome>
    );
};

export default Login;