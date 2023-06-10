import React, { useState } from "react";
import InfoUsuario from "../../components/infousuario/InfoUsuario";
import LogoImage from "../../assets/img/logopizza.png";
import { ChakraProvider, IconButton, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Footer from "../footer/Footer";
import Swal from "sweetalert2";

const SearchBar = ({ getPizzas }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      getPizzas(`q=${searchTerm}`);
    } else {
      Swal.fire("Oops!", "No has ingresado una palabra para buscar.", "error");
    }
  };

  return (
    <ChakraProvider>
      <InfoUsuario /> <br />

      <Stack mt='5%' spacing={4}>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputRightElement>
              <IconButton variant='unstyled' color="#FF2153" mr='35px' aria-label='Search database' icon={<SearchIcon />} />
            </InputRightElement>
            <Input variant='white' width='90%' margin='auto' type='text' placeholder='Peperoni'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)} />
          </InputGroup>
        </form>
      </Stack>

      <Stack
        align="center"
        spacing={4}
        style={{ marginTop: '50px', marginBottom: '50%', position: "relative" }}
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
