import React, {useState}from 'react'
import { Container, Form, Button } from "react-bootstrap";
import loginEmailPassword from "../functions/loginEmailPassword";
import Header from "../components/header"
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("El campo email es obligatorio"),
  password: yup
    .string()
    .required()
});

function Login({usuario,setUsuario=null}) {
  const [validated, setValidated] = useState(schema);
    
  async function submitHandler(e) {
        e.preventDefault();
        const correo = document.getElementById("formCorreo").value;
        const contra = e.target.formContra.value;
        usuario=await loginEmailPassword(correo, contra);
        if(setUsuario!==null){
          setUsuario(usuario)
        }
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
      }
      setValidated(true);
    }
    
      return (
        <>
        <Header/>
        <Container>
          <h1>Bienvenido</h1>
          <h2>Inicia sesión</h2>
          <Form noValidate onSubmit={submitHandler} validated={validated}>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">Ingrese una direccion valida!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formContra">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password"  required minLength={6}/>
              <Form.Control.Feedback type="invalid">La contrseña debe ser de 6 caracteres!</Form.Control.Feedback>
            </Form.Group>
            <hr/>
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Container>
        </>
      );
}

export default Login
