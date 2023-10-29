import styled from "styled-components";

export const Container = styled.div`
   background-color: ${({ theme })=> theme.COLORS.BLACK};
   color: ${({ theme })=> theme.COLORS.WHITE};
   height: 18rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   p{
      padding-top: .2rem;
   }

    span{
      color: ${({ theme})=> theme.COLORS.PURPLE};

   }
`;
