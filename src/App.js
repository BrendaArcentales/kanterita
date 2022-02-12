import React,{useEffect} from "react"
import Container from "react-bootstrap/Container";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import firebaseApp from "./firebase/credencials";
import {getFirestore} from "firebase/firestore"
import getPermisos from "./functions/getPermisos";


import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [usuario, setUsuario] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [usuarioTemporal, setUsuarioTemporal] = React.useState(null);

  async function getRole(email){
    const permiso = await getPermisos(email);
    if(permiso.length>0){
      setRole("employee")
    }else{
      setRole("admin")
    }
  }
 useEffect(() => {
    console.log("**************************hoo efeec *******************************",usuarioTemporal?.user.email);
    if (usuarioTemporal) {
      getRole(usuarioTemporal?.user.email)
      setUsuario(usuarioTemporal.user);
    } else {
      setUsuario(null);
    }
  },[usuarioTemporal]);
 onAuthStateChanged(auth, (usuarioFirebase) => {
  });

  return (
    <Container fluid>
      {usuario? "": <Login usuario={usuarioTemporal} setUsuario={setUsuarioTemporal}/>}
      {(usuario!==null&&role==="admin") ?<Home usuario={usuario} setUsuario={setUsuario}/> : ""}
      {(usuario!==null&&role==="employee") ?<Profile usuario={usuario} setUsuario={setUsuario}/> : ""}
    </Container>
  );
}

export default App;
