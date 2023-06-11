import React, { useState, useEffect } from "react";
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

const SearchBar = ({ getPizzas }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchPizzas = async (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    try {
      const response = await axios.get("http://localhost:3000/products");
      console.log(response.data);
      const filterPizzas = response.data.filter((product) =>
        product.pizzaname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filterPizzas);
      setSearchTerm(filterPizzas);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (searchTerm()) {

      if (pizzaExists) {
        getPizzas(`q=${searchTerm}`);
      } else {
        Swal.fire("Error", "La pizza ingresada no existe.", "error");
      }
    } else {
      Swal.fire("Error", "No has seleccionado una pizza.", "error");
    }
  };
  

  return (
    <ChakraProvider>
      <InfoUsuario /> <br />

      <Stack mt="5%" spacing={4}>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputRightElement>
              <IconButton
                variant="unstyled"
                color="#FF2153"
                mr="35px"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </InputRightElement>
            <Input
              variant="white"
              width="90%"
              margin="auto"
              type="text"
              placeholder="Pepperoni"
              value={searchTerm}
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
      </Stack> <br />
      <Footer />
    </ChakraProvider>
  );
};

export default SearchBar;