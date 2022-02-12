import firebaseApp from "../firebase/credencials";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

function editeEmployee(userData ) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "users");
  const docRef = doc(collectionRef, userData.uid);
  setDoc(docRef, userData);
}

export default editeEmployee;