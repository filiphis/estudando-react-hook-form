import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: max(40rem, 35%);
    height: 700px;
    background-color: #bdc3c7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 80%;
  }

  button {
    width: 100%;
    margin-top: 4rem;
    padding: 3rem;
    transition: filter 0.4s;
    color: white;
    background-color: #34495e;

    &:hover {
      filter: brightness(1.3);
      cursor: pointer;
    }
  }

  p {
    color: #278800;
    margin-top: 2.5rem;
    font-weight: bold;
  }
`;
