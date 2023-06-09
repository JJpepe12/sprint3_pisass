import styled from "styled-components";
import backgrount from "../../assets/img/pizza_backgroud.jpeg"
export const PizzaHome = styled.div`
 @media (max-width: 375px) {
display:flex;
flex-direction:column;
gap: 50px;
justify-content: center;
align-items:center;
font-family: 'Lato', sans-serif;
padding: 7%;
figure{
    width: 30%;
}
figure img{
    width: 100%;
}
h2 {
    color:white;
    filter: contrast(2.5);
    font-weight: bolder;
    font-size: 20px;
    /* text-align:center; */
    padding-left: 20px;
}

h3{
    color:white;
    font-weight:bolder;
    text-align:center;
}
div {
    display:flex; 
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    align-items: center;
}
div h5{
    font-weight: lighter;
    color:white;
    font-size:smaller;
}
div h4{
    font-weight: bolder;
    color:white;
    font-size:20px;
}
background-image: url(${backgrount});
background-size: cover;
/* filter: brightness(0.5);
background-blend-mode: difference; */
filter: saturate(0.5);
}
`;
 