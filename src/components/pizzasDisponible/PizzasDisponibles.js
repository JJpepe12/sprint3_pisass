import React, { useEffect, useState } from "react";
import InfoUsuario from '../infousuario/InfoUsuario';
import {  Card,  Stack,  Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ticketImage from '../../assets/img/ticket..png';
// import Pizza1 from '../../assets/img/pizza_ajo.jpg';
import Footer from '../footer/Footer';
import  { get } from '../services/usuarioService'
import ShowCards from "../showCards/ShowCards";


const promociones = [
  {
    id: 1,
    nombre: 'Cupón para Frontend',
    discount: '45% OFF',
    image: ticketImage,
  },
  {
    id: 2,
    nombre: 'Cupón Pizza CSS',
    discount: '30% OFF',
    image: ticketImage,
  },
  {
    id: 3,
    nombre: 'Cupón para Backend',
    discount: '35% OFF',
    image: ticketImage,
  },
];



const PizzasDisponibles = () => {

  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Hook de effecto para traer la info de la pizzas
  const [products, handleProducts] = useState([]);
  const getProducts = async() => {
    const getproducts = await get('products');
    handleProducts(getproducts);
}
useEffect(() => {
    getProducts();
    // console.log(products);
})

  return (
   
     <Box>
      <InfoUsuario />
      <Stack direction='row' padding='35px' justify='space-between '>
        <h2 style={{fontWeight: "bold" , fontSize: "18px"}}>Pizzas Disponibles</h2>
        <h3 style={{ color: "#FF2153", fontWeight: "bold" }} >Ver todas</h3>
      </Stack>

      <Slider padding='30px' {...settings}>
        {promociones.map((promocion) => (
          <div key={promocion.id}>
            <div style={{ position: 'relative',display: 'flex', justifyContent: 'center' }}>
              <img src={promocion.image} alt={promocion.nombre} style={{ maxWidth: '250px',  margin: '30' }} />
              <div style={{ position: 'absolute', bottom: '10px', color: 'white', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px' }}>{promocion.nombre}</h3>
                <p style={{ fontSize: '30px' }}>{promocion.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Card>
    
            {products.map((product) => (
              <ShowCards key={product.id} product={product}>
              </ShowCards>
            ))}
          
      </Card> <Footer/>
      </Box>
  );
};

export default PizzasDisponibles;
