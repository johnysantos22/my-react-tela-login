import {
  FormWrapper,
  From,
  Label,
  Input,
  Button,
  Link,
  Container,
  Title
} from "../GlobalStyle/styled"


export default function App() {


  return (
    <Container>
      <FormWrapper>

        <Title>Login</Title>
        <From>
          <Label>Usuario</Label>
          <Input type="text" placeholder="Digite seu usuario de acesso ao sistema " />
          <Label>Senha</Label>
          <Input type="password" placeholder="Digite sua senha de acesso ao sistema" />
          <Button>Entrar</Button>
        </From>
        <Link to="/cadastro">Cadastrar</Link>


      </FormWrapper>
    </Container>
  )
}


