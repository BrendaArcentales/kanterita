import firebaseApp from "../firebase/credencials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

async function loginEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);

}

export default loginEmailPassword;