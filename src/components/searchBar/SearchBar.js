import React from "react";
import InfoUsuario from "../../components/infousuario/InfoUsuario";
import LogoImage from "../../assets/img/logopizza.png";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";
import SearchIcon from "../../assets/icons/search.svg";
// import { InputForm } from "./StylesSearchBar";

const SearchBar = () => {
  return (
    <ChakraProvider>
      <InfoUsuario />
      {/* <InputForm > */}
        <form class="search-bar">
          <input type="text" placeholder="Estoy buscando..." name="" id="" />
          <div class="actions">
            <button type="submit">
              <span class="material-icons-outlined">search</span>
            </button>
          </div>
        </form>
        <figure>
          <img src={SearchIcon} alt="Search Icon" />
        </figure>
      {/* </InputForm> */}
      <Stack
        align="center"
        spacing={4}
        style={{ marginTop: "50px", position: "relative" }}
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
    </ChakraProvider>
  );
};

export default SearchBar;
