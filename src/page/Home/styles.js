import styled from "styled-components";

export const Container = styled.div``;

export const Search = styled.div`


  form {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: -2rem;
    padding: 0 1rem;
  }

  input {
    width: 60rem;
    border-radius: 8px;
    height: 5rem;
    padding-left: 1rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 10rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
  }

  @media (max-width: 800px) {
    input{
    width: 100%;
    }

  }
`;

export const Content = styled.div`
  width: 72rem;
  margin: 2rem auto;

  div {
    padding-bottom: 0.5rem;
  }

  p {
    color: white;
  }

  > div li {
    padding-top: 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 2rem;
    padding-left: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;

    > button {
      color: ${({ theme }) => theme.COLORS.TEXT};
      background: transparent;
      cursor: pointer;
    }

    > button:hover {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .box {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  @media (max-width: 800px) {
  width: 90%;
  padding: 0 1rem;



  }
`;
