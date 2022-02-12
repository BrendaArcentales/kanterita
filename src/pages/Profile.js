import React from 'react'
import { Container, Stack, Button, Form } from "react-bootstrap";
import Header from "../components/header"
import signOut from "../functions/logout"
function Profile({usuario,setUsuario}){
  console.log("usuarioEmpleado",usuario)

  async function cerrarSesion(){
    setUsuario(null);
    signOut();
    
  }
  return ( 
    <>
  <Header/>
    <Container>
    <Stack direction="horizontal" className="justify-content-between">
          <p style={{ fontSize: 24 }}>Bienvenido,{usuario.email} </p>
          <Button onClick={()=>cerrarSesion()}>Cerrar sesión</Button>
        </Stack>
      <hr/>
    <Form>
            <Form.Group controlId="formUid">
              <Form.Label>Numero Único</Form.Label>
              <Form.Control
                    id="uid"
                    placeholder="Uid"
                    type="email"
                    required
                    className="mb-1"
                    //value={usuario.email.uid}
                />
            </Form.Group>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="email" required/>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                    id="cardId"
                    placeholder="Cédula"
                    type="text"
                    maxLength="10"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                    id="name"
                    placeholder="Nombre"
                    type="text"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                    id="lastname"
                    placeholder="Apellido"
                    type="text"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                    id="birthday"
                    placeholder="Fecha de nacimiento"
                    type="date"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formEmaiAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                    id="address"
                    placeholder="Domicilio"
                    type="email"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formCellphone">
              <Form.Label>Teléfono Móvil</Form.Label>
              <Form.Control
                    id="cellphone"
                    placeholder="Celular"
                    type="text"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estado de Vacunacion</Form.Label>
              <Form.Select id="selectType">
                  <option>Vacunado</option>
                  <option>Sin vacunarse</option>
               </Form.Select>
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Tipo de vacuna</Form.Label>
              <Form.Select id="selectType">
                  <option>Sputnik</option>
                  <option>AstraZeneca</option>
                  <option> Pfizer </option>
                  <option>Jhonson&Jhonson</option>
               </Form.Select>
            </Form.Group>
            <Form.Group controlId="formVaccineDate">
              <Form.Label>Fecha de vacunación</Form.Label>
              <Form.Control
                    id="vaccineDate"
                    placeholder="Fecha de vacunación"
                    type="date"
                    required
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Dosis</Form.Label>
              <Form.Control
                    id="doses"
                    placeholder="Dosis"
                    type="number"
                    required
                    className="mb-1"
                    maxLength="3"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
              Actualizar
            </Button>
          </Form>
    </Container>
    </>
  )
}

export default Profile
