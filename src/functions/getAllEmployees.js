import firebaseApp from "../firebase/credencials";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllEmployees() {
  const employees = [];
  const collectionRef = collection(db, "users");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    employees.push(doc.data());
  });
  console.log("empleados", employees)
  return employees;
 
}