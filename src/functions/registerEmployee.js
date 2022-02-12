import firebaseApp from "../firebase/credencials";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

function registerEmployee(userData) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "users");
  const docRef = doc(collectionRef, userData.uid);
  console.log("usuario creado todo",userData)
  console.log("uid",userData.uid)
  setDoc(docRef, userData);

}

export default registerEmployee;