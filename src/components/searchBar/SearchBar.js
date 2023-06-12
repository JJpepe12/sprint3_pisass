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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Footer from "../footer/Footer";
import Swal from "sweetalert2";
import { PizzaContext } from "../../context/PizzasProvider";
import React, { useEffect, useState, useContext } from "react";

// const SearchBar = ({ getPizzas }) => {
  const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const pizzaData = useContext(PizzaContext);
  console.log(pizzaData);
 
  const handleSearchPizzas =  (event) => {
    setSearchTerm(event.target.value);
      setShowFilter(true);
    };
    console.log( searchTerm);

    const filteredPizzas = pizzaData
    ? pizzaData.filter((product) =>
        product.pizzaname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
    console.log(filteredPizzas);

    
    const handleSubmit = (event) => {
      event.preventDefault();

        if (filteredPizzas.length) {
          Swal.fire("Excelente", "Pizza encontrada", "success");
        } else {
          Swal.fire("Error", "La pizza ingresada no existe.", "error");
        }
      }



  return (
    <ChakraProvider>
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

      <Stack
        align="center"
        spacing={4}
        style={{ marginTop: "50px", marginBottom: "50%", position: "relative" }}
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
      <br />
      <Footer />
    </ChakraProvider>
  );
};

export default SearchBar;