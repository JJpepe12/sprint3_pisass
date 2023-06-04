import React from "react";
import logo from "../../assets/img/logo.png"
import { PizzaHome } from "./StyleLogin";
import Form from "../../components/formLogIn/Form";
import pizzaBackground from "../../assets/img/pizza_backgroud.jpeg"

const Login = () => {
    return (
        <PizzaHome>
            <figure>
                <img src={logo} alt="logo pizza" />
            </figure>
            <article className="home-text">
                <h2> Inicia sesión en tu cuenta </h2>
                <p> Disfruta de la mejor pizza creada para las personas amantes del código
                </p>
            </article>
            <Form />
            <h3> Restablecer contraseña </h3>
            <h4>¿No tienes una cuenta?</h4>
            <h3> Regístrate aquí</h3>
        </PizzaHome>    
    );
};

export default Login;
