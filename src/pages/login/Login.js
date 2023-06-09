import React from "react";

import logo from "../../assets/img/logo.png"
import { PizzaHome } from "./StyleLogin";
import Form from "../../components/formLogIn/Form";
import pizzaBackground from "../../assets/img/pizza_backgroud.jpeg"
// import { Formulario } from "../../components/formLogIn/formPrueba";

const Login = ({ handleUser }) => {
    // const Login = () => {

    return (
        <PizzaHome>
            <figure>
                <img src={logo} alt="logo pizza" />
            </figure>
            <section>
                <h2> Inicia sesión en tu cuenta </h2>
                <Form handleUser={handleUser} />
                {/* <Formulario/> */}
                <h3> Restablecer contraseña </h3>
                <div>
                <h5>¿No tienes una cuenta?</h5>
                <h3> Regístrate aquí</h3>
                </div>
            </section>
        </PizzaHome>
    );
};

export default Login;
