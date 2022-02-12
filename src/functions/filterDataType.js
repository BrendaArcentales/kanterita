import firebaseApp from "../firebase/credencials";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";


async function filterDataType(stringSearch) {
  const db = getFirestore(firebaseApp);
  const docusFilter = [];
  const collecionRef = collection(db, "users");
  const queryType = query(collecionRef,
 where("vaccineType", "==", stringSearch)
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

export default filterDataType;