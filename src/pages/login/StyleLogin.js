import styled from "styled-components";
import backgrount from "../../assets/img/pizza_backgroud.jpeg"
export const PizzaHome = styled.div`

    display: flex;
    flex-direction: column;
    gap: 90px;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    padding: 7%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${backgrount});
      background-size: cover;
      filter: brightness(0.4);
    }

    figure {
      width: 30%;
      z-index: 5;
    }

    figure img {
      width: 100%;
    }

    h1 {
      color: white;
      z-index: 5;
      /* filter: contrast(2.5); */
      font-weight: bolder;
      font-size: 20px;
      padding-left: 20px;
      position:absolute;
      top:205px;
    }

    h2 {
      color: #F2F3F4;
      z-index: 7;
      font-weight: bolder;
      text-align: center;
      position:absolute;
      top:600px;
      left: 100px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      padding-top: 20px;
      align-items: center;
    }

    div h5 {
      font-weight: lighter;
      color: white;
      z-index: 5;
      font-size: smaller;
    }

    div h4 {
      font-weight: bolder;
      color: white;
      z-index: 5;
      font-size: 15px;
      position:absolute;
      top:660px;
    }
  
`;