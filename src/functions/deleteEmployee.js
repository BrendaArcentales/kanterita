import firebaseApp from "../firebase/credencials";
import {getFirestore,deleteDoc,collection,doc} from "firebase/firestore"
const db=getFirestore(firebaseApp);

export default function deleteEmployee(employee){
const colectionRef=collection(db,"users");
const docuRef= doc(colectionRef, employee.uid);
console.log("usuario eliminaado",employee.uid)
deleteDoc(docuRef);
}