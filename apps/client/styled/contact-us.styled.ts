import {ErrorMessage, Form} from "formik";
import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input,
  select,
  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="file"] {
    padding: 0;
  }

  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
