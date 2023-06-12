// import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoUsuario from "../../components/infousuario/InfoUsuario";
import LogoImage from "../../assets/img/logopizza.png";
import {
  ChakraProvider,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Card,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Footer from "../footer/Footer";
import Swal from "sweetalert2";
import { PizzaContext } from "../../context/PizzasProvider";
import React, { useEffect, useState, useContext } from "react";
import ShowCards from "../showCards/ShowCards";

// const SearchBar = ({ getPizzas }) => {
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const pizzaData = useContext(PizzaContext);
  console.log(pizzaData);

  const handleSearchPizzas = (event) => {
    setSearchTerm(event.target.value);
    setShowFilter(true);
    setShowBackground(true);
    
  };
  console.log(searchTerm);

  const filteredPizzas = pizzaData
    ? pizzaData.filter((product) =>
      product.pizzaname.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];
  console.log(filteredPizzas);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      Swal.fire("Error", "Ingresa un término de búsqueda", "error");
      return;
    }

    if (filteredPizzas.length) {
      Swal.fire("Excelente", "Pizza encontrada", "success");
      setShowBackground(false);
      setShowResults(true); // 
    } else {
      Swal.fire("Error", "La pizza ingresada no existe.", "error");
    }
  };



  return (
    <ChakraProvider>
      <Box backgroundColor= "#fadce7">
      <InfoUsuario /> <br />

      <Stack mt="5%" spacing={4}>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <InputGroup>
            <InputRightElement>
              <IconButton
                variant="unstyled"
                color="#FF2153"
                mr="35px"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={handleSubmit}
              />
            </InputRightElement>
            <Input
              variant="white"
              width="90%"
              margin="auto"
              type="text"
              placeholder="Pepperoni"
              // value={searchTerm}
              onChange={handleSearchPizzas}
            />
          </InputGroup>
        </form>
      </Stack>

      {showBackground && (
        <Stack
          className="fondito_busqueda"
          align="center"
          backgroundColor= "#fadce7"
          spacing={4}
           padding="50px"
            height="360px"
           position= "relative"
          
        >
          <img
            src={LogoImage}
            alt="Logo Pizza"
            style={{ width: "90px", height: "auto" }}
          />
          <Text color="gray" fontWeight="bold">
            Busca la Pizza que más te gusta
          </Text>
        </Stack>
      )}
      <br />
      { showResults && filteredPizzas.length > 0 && (

  <Stack mt="5%" spacing={4}>
    {filteredPizzas.map((product) => (
      <ShowCards key={product.id} product={product} />
    ))}
  </Stack>
)}
      <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default SearchBar;