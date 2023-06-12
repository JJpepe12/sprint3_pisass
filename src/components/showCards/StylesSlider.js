import styled from "styled-components";


export 

.slick-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slick-dots li {
    margin: 0 5px;
  }
  
  .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    border: none;
    cursor: pointer;
    outline: none;
  }
  
  .slick-dots li.slick-active button {
    background-color: black;
  }
  