import firebaseApp from "../firebase/credencials";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";


async function filterDataVaccine() {
  const db = getFirestore(firebaseApp);
  const docusFilter = [];
  const collecionRef = collection(db, "users");
  const queryTypeTrue = query(collecionRef,
 where("state", "==", "vacunado")
  );
  const queryTypeFalse = query(collecionRef,
    where("state", "==", "Vacunado")
     );

  const arraySnapshots = await Promise.all([
    getDocs(queryTypeTrue),
    getDocs(queryTypeFalse),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFilter.push(doc.data());
    });
  });
  console.log("Filtro",docusFilter)
  return docusFilter;
}

export default filterDataVaccine;