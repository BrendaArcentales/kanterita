import firebaseApp from "../firebase/credencials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

async function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}

export default createUser;