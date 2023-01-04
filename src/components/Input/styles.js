import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  input {
    width: 100%;
    padding: 2rem 2rem;
    border: 3px solid ${(props) => (props.hasError ? "#8b223c86" : "gray")};
  }
  span {
    display: block;
    font-weight: bold;
    color: ${(props) => props.hasError && "#8b223c"};
    align-self: flex-start;
    margin-left: 0.4rem;
  }
`;
