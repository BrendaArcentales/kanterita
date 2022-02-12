import React, {useState}from 'react'
import { Modal, Stack, Form, Button } from "react-bootstrap";
import registerEmployee from "../functions/registerEmployee"
import {v4 as uuidv4} from "uuid";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("El campo email es obligatorio"),
  name: yup
    .string()
    .required(),
  lastname: yup
    .string()
    .required(),
  cardId: yup
    .string()
    .required()
});

function ModalRegister({isModalRegister,setIsModalRegister,loadEmployees}) {
  const [validated, setValidated] = useState(schema);
  

    function addEmployeeModal(e){
        const cardId=document.getElementById("cardId").value;
        const name=document.getElementById("name").value;
        const lastname=document.getElementById("lastname").value;
        const email=document.getElementById("email").value;
        const uid=uuidv4();
        const role="employee"
        const clinicStory="No dado de alta"
        const birthday=Date()
        const addres=""
        const cellphone=""
        const state="No vacunado"
        const vaccineType=""
        const doses=0
        const vaccineDate=Date()
        const userData={uid,cardId,name,lastname,email,role,clinicStory,birthday,addres,cellphone,state,vaccineType,doses,vaccineDate};
        registerEmployee(userData);
        loadEmployees();
        setIsModalRegister(false);
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
      }
      setValidated(true);
    }
  return (
    <Modal show={isModalRegister} 
    onHide={() => setIsModalRegister(false)}>
       <Modal.Header>
       <Modal.Title>Registar Empleado</Modal.Title>
       </Modal.Header>
       <Modal.Body>
           <Form noValidate validated={validated}>
               <Stack>
                <Form.Control
                    id="cardId"
                    placeholder="Cédula"
                    type="text"
                    pattern="[0-9]{10}"
                    required
                    className="mb-1"
                /><Form.Control.Feedback type="invalid">La cédula debe tener 10 digitos</Form.Control.Feedback>
                <Form.Control
                    id="name"
                    placeholder="Nombre"
                    type="text"
                    required
                    className="mb-1"
                    pattern="[a-z]{1,15}"
                /><Form.Control.Feedback type="invalid">No ingrese números</Form.Control.Feedback>
                <Form.Control
                    id="lastname"
                    placeholder="Apellido"
                    type="text"
                    required
                    className="mb-1"
                    pattern="[a-z]{1,15}"
                /><Form.Control.Feedback type="invalid">No ingrese números</Form.Control.Feedback>
                <Form.Control
                    id="email"
                    placeholder="Correo"
                    type="email"
                    required
                    className="mb-1"
                /><Form.Control.Feedback type="invalid">Ingrese una direccion de correo valida</Form.Control.Feedback>
               </Stack>
           </Form>
       </Modal.Body>
       <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalRegister(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={addEmployeeModal}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalRegister
