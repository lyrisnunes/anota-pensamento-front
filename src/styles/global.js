import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      list-style: none;
   }

   :root{
   font-size: 62.5%;
   }

   body{
   font-size: 1.6rem;
   font-family: 'Roboto', sans-serif;
   background-color: ${({ theme })=> theme.COLORS.GRAY_300};
   }
`;
