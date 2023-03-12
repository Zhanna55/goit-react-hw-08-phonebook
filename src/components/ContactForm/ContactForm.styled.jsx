import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid black;
  padding: 15px;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;
const FormButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;

const FormField = styled(Field)`
  padding-left: 2px;
  border: 1px solid teal;
  &:hover,
  &:focus {
    border: 2px solid 234e52;
  }
  color: black;
  background-color: white;
`;

const Error = styled(ErrorMessage)`
  font-size: 12px;
  color: blue;
`;

export { FormContainer, FormLabel, FormButton, FormField, Error };
