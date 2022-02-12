import React,{useState} from 'react'
import { Modal, Stack, Form, Button } from "react-bootstrap";
import editeEmployee from "../functions/editeEmployee"
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

function ModalEdite({
  isModalEdite, setIsModalEdite,
  loadEmployees,
  employeeEdite,setEmployeeEdite}) {

    const [validated, setValidated] = useState(schema);

    function editeEmployeeModal(e){
        const cardId=document.getElementById("cardId").value;
        const name=document.getElementById("name").value;
        const lastname=document.getElementById("lastname").value;
        const email=document.getElementById("email").value;
        const uid=document.getElementById("uid").value;
        const clinicStory=document.getElementById("clinicStory").value;
        const state=document.getElementById("state").value;
        const vaccineType=document.getElementById("vaccineType").value;
        const userData={uid,cardId,name,lastname,email,clinicStory,state,vaccineType};
        editeEmployee(userData);
        setEmployeeEdite(null);
        loadEmployees();
        setIsModalEdite(false);
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
      }
      setValidated(true);
    }
    const [employee, setEmployee]=useState({
      ...employeeEdite,
    });

  return (
    <Modal show={isModalEdite} 
    onHide={() =>{setIsModalEdite(false);setEmployeeEdite(null);}}>
       <Modal.Header>
       <Modal.Title>Editar Empleado</Modal.Title>
       </Modal.Header>
       <Modal.Body>
           <Form noValidate validated={validated}>
               <Stack>
               <Form.Label>Cédula:</Form.Label>
                <Form.Control
                    id="cardId"
                    placeholder="Cédula"
                    type="text"
                    pattern="[0-9]{10}"
                    required
                    className="mb-1"
                    value={employee.cardId}
                    onChange={(e)=>setEmployee({
                      ...employee,
                      cardId:e.target.value,
                    })}
                /><Form.Control.Feedback type="invalid">La cédula debe tener 10 digitos</Form.Control.Feedback>
                 <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    id="name"
                    placeholder="Nombre"
                    type="text"
                    required
                    pattern="[a-z]{1,15}{1,4}"
                    className="mb-1"
                    value={employee.name}
                    onChange={(e)=>setEmployee({
                      ...employee,
                      name:e.target.value,
                    })}
                /><Form.Control.Feedback type="invalid">No ingrese números</Form.Control.Feedback>
                 <Form.Label>Apellido:</Form.Label>
                <Form.Control
                    id="lastname"
                    placeholder="Apellido"
                    type="text"
                    required
                    pattern="[a-z]{1,15}{1,4}"
                    className="mb-1"
                    value={employee.lastname}
                    onChange={(e)=>setEmployee({
                      ...employee,
                      lastname:e.target.value,
                    })}
                />
                <Form.Control.Feedback type="invalid">No ingrese números</Form.Control.Feedback>
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                    id="email"
                    placeholder="Correo"
                    type="email"
                    required
                    className="mb-1"
                    value={employee.email}
                    onChange={(e)=>setEmployee({
                      ...employee,
                      email:e.target.value,
                    })}
                />
                 <Form.Label>Número Único:</Form.Label>
                <Form.Control 
                    id="uid"
                    placeholder="uid"
                    type="text"
                    required
                    className="mb-1"
                    value={employee.uid}
                />
                <Form.Label>Historia Clinica:</Form.Label>
                <Form.Control
                    id="clinicStory"
                    placeholder="Historia Clinica"
                    type="text"
                    required
                    className="mb-1"
                    value={employee.clinicStory}
                />
                <Form.Label>Estado de vacunación (Vacunado o No vacunado):</Form.Label>
                <Form.Control
                    id="state"
                    placeholder="Estado de vacunación "
                    type="text"
                    required
                    className="mb-1"
                    value={employee.state}
                    onChange={(e)=>setEmployee({
                      ...employee,
                      state:e.target.value,
                    })}
                />
                <Form.Label>Tipo de Vacuna (Sputnik, AstraZeneca, Pfizer y Jhonson&Jhonson):</Form.Label>
                <Form.Control
                    id="vaccineType"
                    placeholder="Tipo de Vacuna"
                    type="text"
                    required
                    className="mb-1"
                    value={employee.vaccineType}
                    onChange={(e)=>setEmployee({
                      ...employee,
                      vaccineType:e.target.value,
                    })}
                />
               </Stack>
           </Form>
       </Modal.Body>
       <Modal.Footer>
        <Button variant="secondary" onClick={() => {setIsModalEdite(false);
          setEmployeeEdite(null)}}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={editeEmployeeModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEdite