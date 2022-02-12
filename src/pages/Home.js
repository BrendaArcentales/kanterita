import React,{useState,useEffect} from 'react'
import signOut from "../functions/logout"
import { Container, Stack, Button, Form, Table, Row, Col} from "react-bootstrap";
import getAllEmployees from "../functions/getAllEmployees";
import deleteEmployee from "../functions/deleteEmployee";
import filterDataType from '../functions/filterDataType';
import ModalRegister from "../components/ModalRegister";
import ModalEdite from "../components/ModalEdite";
import filterDataVaccine from '../functions/filterDataVaccine';
import createUser from "../functions/createUser";
import editeEmployee from '../functions/editeEmployee';

function Home({usuario,setUsuario}) {
  const [employees, setEmployees]=useState([]);
  const [isModalRegister, setIsModalRegister]=useState(false);
  const [isModalEdite, setIsModalEdite]=useState(false);
  const [employeeEdite,setEmployeeEdite]=useState(false);

  function loadEmployees() {
    getAllEmployees().then((employees) => {
      setEmployees(employees);
    });
  }

  function addEmployee(){
    setIsModalRegister(true);
  }

  useEffect(()=>{
    loadEmployees();
  },[]);
  async function cerrarSesion(){
    setUsuario(null);
    signOut();
    
  }

  async function searchFormHandler(e) {
    e.preventDefault();
    
    const search = document.getElementById("search").value;
    const nvosDocus = await filterDataType(search);
    setEmployees(nvosDocus);
  }
  async function searchVaccineFormHandler(e) {
    e.preventDefault();
    const nvosDocus = await filterDataVaccine();
    setEmployees(nvosDocus);
  }
  async function darDeAlta(employee){
    try{
      if(employee.email!==null && employee.cardId!==null){
      const result =await createUser(employee.email,employee.cardId);
      employee.clinicStory="Dado de alta";
      editeEmployee(employee);
      loadEmployees();
      alert("Empleado dado de alta")
      }else{
        alert("Se necesita email y cedula");
      }
    }catch(e){
      console.log("Error al dar de alta",e)
      alert("Consultar con el admin")
    }
    return true;
  }
  return (
    <Container>
      <ModalRegister
      isModalRegister={isModalRegister}
      setIsModalRegister={setIsModalRegister}
      loadEmployees={loadEmployees}
      />
     {employeeEdite &&(<ModalEdite
      isModalEdite={isModalEdite}
      setIsModalEdite={setIsModalEdite}
      loadEmployees={loadEmployees}
      employeeEdite={employeeEdite}
      setEmployeeEdite={setEmployeeEdite}
      />)}
        <Stack direction="horizontal" className="justify-content-between">
          <p style={{ fontSize: 24 }}>Bienvenido,{usuario.email} </p>
          <Button onClick={()=>cerrarSesion()}>Cerrar sesión</Button>
        </Stack>
      <hr/>
    
      <Form >
        <Stack direction="horizontal">
          <Form.Group controlId="search" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Button
            variant="light"
            onClick={() => {
              const input = document.getElementById("search");
              input.value = "";
              loadEmployees();
            }}
          >
            Limpiar
          </Button>
        </Stack>
        <Row xs={1} md={2} className="g-4">
        <Stack direction="horizontal" >
        <Col> <Button variant="dark" type="submit" size="sm" onClick={searchVaccineFormHandler}>
            Buscar por estado de vacunacion
          </Button></Col>
        <Col>
        <Button variant="dark" type="submit" size="sm" onClick={searchFormHandler}> 
            Buscar por tipo de vacuna
          </Button> 
        </Col>
          </Stack>
          </Row>   
      </Form>
      <hr/>
      <Button onClick={addEmployee}> Registrar nuevo empleado</Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Cédula </th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Historia Clinica</th>
            <th>Estado</th>
            <th>Tipo de vacuna</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { employees &&
           employees.map((employee,index)=>(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{employee.cardId}</td>
            <td>{employee.name}</td>
            <td>{employee.lastname}</td>
            <td>{employee.email}</td>
            <td>{employee.clinicStory}</td>
            <td>{employee.state}</td>
            <td>{employee.vaccineType}</td>
            <td> 
            <Row xs={1} md={2}className="g-4">
              <Col>
              <Button
                    variant="dark"
                    //disabled={employee.role==="User"?"false":"true"}
                    onClick={()=>{
                      setEmployeeEdite({...employee});
                      setIsModalEdite(true);
                      }}
                  >
                    Editar
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={()=>{deleteEmployee(employee);
                      loadEmployees();}}
                  >
                    Eliminar
                  </Button>
                  </Col>
                  <Col>
                  <Button
                    variant="navy"
                    disabled={employee.clinicStory==="Dado de alta" ?true:false}
                    onClick={()=>{darDeAlta(employee);
                    loadEmployees();}}
                  >
                    Dar de alta
                  </Button>
                  </Col>
            </Row>
             </td>
          </tr>
           ))}
        </tbody>
      </Table>
      
    </Container>
  )
}

export default Home
