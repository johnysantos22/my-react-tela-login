import Style from "styled-components";

export const Container = Style.div`
justify-content: center;
align-items: center;
display: flex;

`;

export const FormWrapper = Style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

`;

export const Title = Style.h1`
  color: #000;
  font-size: 24px;
  text-align: center;
`;

export const From = Style.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = Style.label`
  margin-bottom: 8px;
  color: #000;
  font-size: 16px;
`;

export const Input = Style.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = Style.button`
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #0077cc;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Link = Style.a`
  margin-top: 16px;
  color: #0077cc;
  text-decoration: none;
  cursor: pointer;
`;

