import React from "react";
import logo from "../../assets/img/logo.png"
import { PizzaHome } from "./StyleLogin";
import Form from "../../components/formLogIn/Form";
import { useNavigate } from "react-router";

// import { Formulario } from "../../components/formLogIn/formPrueba";

// const Login = ({ handleUser }) => {
    // const Login = () => {
        const Login = ({ }) => {
            const navigate = useNavigate();

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
                <h5>¿No tienes una cuenta?</h5>
                <h4 onClick={() => navigate("/new")} > Regístrate aquí</h4>
                </div>
            </section>
        </PizzaHome>
    );
};

export default Login;