import React from "react";
import {
    Button,
    Card,
    CardBody,
    Image,
    Stack,
    Text,
    Box,
} from "@chakra-ui/react";
import Pizza1 from "../../assets/img/pizza_ajo.jpg";


const Results = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
        <Box bg="rgba(255, 192, 203, 0.2)">
            <InfoUsuario />
            <Stack direction="row" padding="35" justify="space-between ">
            <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
                Pizzas Disponibles
            </h2>
            <h3 style={{ color: "#FF2153", fontWeight: "bold" }}>Ver todas</h3>
            </Stack>

            <Slider padding="30" {...settings}>
            {promociones.map((promocion) => (
                <div key={promocion.id}>
                <div
                    style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    <img
                    src={promocion.image}
                    alt={promocion.nombre}
                    style={{ maxWidth: "250px", margin: "30" }}
                    />
                    <div
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        color: "white",
                        textAlign: "center",
                    }}
                    >
                    <h3 style={{ fontSize: "20px" }}>{promocion.nombre}</h3>
                    <p style={{ fontSize: "30px" }}>{promocion.discount}</p>
                    </div>
                </div>
                </div>
            ))}
            </Slider>

            <Card maxW="sm" bottom="-25px" padding="30">
            <CardBody>
                <Box position="relative">
                <Image src={Pizza1} alt="Pizza de ajo" borderRadius="10px" />
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    top="0"
                    bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                    borderRadius="10px"
                />
                <Stack
                    direction="row"
                    position="absolute"
                    top="100px"
                    gap="3.5rem"
                    padding="40px"
                >
                    <Text fontWeight="bold" color="white">
                    Master CSS Pizza
                    </Text>
                    <Button
                    borderRadius="18px"
                    backgroundColor="#FF2153"
                    w="88px"
                    h="35px"
                    fontWeight="bold"
                    color="white"
                    >
                    $50.000
                    </Button>
                </Stack>
                </Box>
            </CardBody>
            </Card>

            <Card maxW="sm" padding="30">
            <CardBody>
                <Box position="relative">
                <Image src={Pizza1} alt="Pizza de ajo" borderRadius="10px" />
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    top="0"
                    bg="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                    borderRadius="10px"
                />
                <Stack
                    direction="row"
                    position="absolute"
                    top="100px"
                    gap="3.5rem"
                    padding="40px"
                >
                    <Text fontWeight="bold" color="white">
                    Master CSS Pizza
                    </Text>
                    <Button
                    borderRadius="18px"
                    backgroundColor="#FF2153"
                    w="88px"
                    h="35px"
                    fontWeight="bold"
                    color="white"
                    >
                    $50.000
                    </Button>
                </Stack>
                </Box>
            </CardBody>
            </Card>
            <Footer />
        </Box>
        </>
    );
};

export default Results;
