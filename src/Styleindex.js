import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Lato', sans-serif;
}

h2 {
  font-size: 1rem;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: var(--very-dark-gray);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bellefair', serif;
    text-align: center;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: white;
}
p{
    font-family: 'Barlow', serif;
    color:#d0d6f9;
    margin: 2%;
}

/* Body */
body{
    background-color: #ffc8dd;
    color: white;
    min-height: 100vh;
    position: relative;
    bottom: 0px;
    left: 0;
    min-width: 290px;
}
`;
