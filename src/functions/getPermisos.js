import firebaseApp from "../firebase/credencials";
import { getFirestore, collection, getDocs, query,
    where, } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getPermisos(email) {
    const db = getFirestore(firebaseApp);
    const docusFilter = [];
    const collecionRef = collection(db, "users");
    const queryType = query(collecionRef,
    where("email", "==", email)
    );
  
    const arraySnapshots = await Promise.all([
      getDocs(queryType),
    ]);
  
    arraySnapshots.forEach((snapshot) => {
      snapshot.forEach((doc) => {
        docusFilter.push(doc.data());
      });
    });
    console.log("Filtro",docusFilter)
    return docusFilter;
}