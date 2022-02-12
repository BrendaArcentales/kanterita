import React, {useEffect,useState}from 'react'
import { Container, Stack, Button, Form } from "react-bootstrap";
import Header from "../components/header";
import signOut from "../functions/logout";
import getPermisos from "../functions/getPermisos";
import editeEmployee from "../functions/editeEmployee";

function Profile({usuario,setUsuario}){
  const [currentUser, setCurrentUser]=useState(null);

  console.log("usuarioEmpleado",usuario)

  async function cerrarSesion(){
    setUsuario(null);
    signOut();
    
  }
  async function  updateProfile(){
    try{
      editeEmployee(currentUser);
    }catch(exception){
      console.log("Error",exception)
    }
  }

  useEffect(() => {
  const fetchData = async () => {
    const data = await getPermisos(usuario.email);
    if(data.length>0){
      setCurrentUser(data[0]);
    }
  }
  fetchData()
  },[]);

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
                    type="txt"
                    required
                    className="mb-1"
                    value={currentUser?.uid}
                    readonly
                />
            </Form.Group>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="email" required value={currentUser?.email}
              disabled="true"
              />
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
                    value={currentUser?.cardId}
                    disabled="true"
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
                    value={currentUser?.name}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      name:e.target.value,
                    })}
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
                    value={currentUser?.lastname}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      lastname:e.target.value,
                    })}
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                    id="birthday"
                    placeholder="Fecha de nacimiento"
                    type="date"
                    className="mb-1"
                    value={currentUser?.birthday}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      birthday:e.target.value,
                    })}
                />
            </Form.Group>
            <Form.Group controlId="formEmaiAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                    id="address"
                    placeholder="Domicilio"
                    type="text"
                    className="mb-1"
                    value={currentUser?.address}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      address:e.target.value,
                    })}
                />
            </Form.Group>
            <Form.Group controlId="formCellphone">
              <Form.Label>Teléfono Móvil</Form.Label>
              <Form.Control
                    id="cellphone"
                    placeholder="Celular"
                    type="text"
                    className="mb-1"
                    value={currentUser?.cellphone}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      cellphone:e.target.value,
                    })}
                />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estado de Vacunacion</Form.Label>
              <Form.Select id="selectType" value={currentUser?.state} onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      state:e.target.value,
                    })}>
                  <option>Vacunado</option>
                  <option>Sin vacunarse</option>
               </Form.Select>
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Tipo de vacuna</Form.Label>
              <Form.Select id="selectType" onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      vaccineType:e.target.value,
                    })}>
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
                    className="mb-1"
                    value={currentUser?.vaccineDate}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      vaccineDate:e.target.value,
                    })}
                />
            </Form.Group>
            <Form.Group controlId="formDoses">
              <Form.Label>Dosis</Form.Label>
              <Form.Control
                    id="doses"
                    placeholder="Dosis"
                    type="number"
                    className="mb-1"
                    maxLength="3"
                    value={currentUser?.doses}
                    onChange={(e)=>setCurrentUser({
                      ...currentUser,
                      doses:e.target.value,
                    })}
                />
            </Form.Group>
            <Button variant="primary" type="button" onClick={updateProfile}>
              Actualizar
            </Button>
          </Form>
    </Container>
    </>
  )
}

export default Profile
