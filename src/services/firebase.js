// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpMv6RCPtBaxHI8sFQik-gFh7CM3PJT9w",
  authDomain: "perfumerie-f8c33.firebaseapp.com",
  projectId: "perfumerie-f8c33",
  storageBucket: "perfumerie-f8c33.appspot.com",
  messagingSenderId: "42293026768",
  appId: "1:42293026768:web:ede5ade92665547ca223d5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export function testDB(){
    console.log(db)
}

export async function getAllFragances(categoria){ 
    
    if(categoria){
        var fraganciasCollectionRef = query(collection(db, "fragancias"), where("categoria", "==", categoria))
    }else{
        fraganciasCollectionRef = collection(db, "fragancias")
    }
    const docSnapshot = await getDocs(fraganciasCollectionRef)
    
    const dataFragancias = docSnapshot.docs.map(item => {
        const fragancia = {
            ...item.data(),
            id: item.id
        }
    return fragancia
    })
    
    return(dataFragancias)
}

export async function getFragances(id){
    const fraganciasCollectionRef = collection(db, "fragancias")
    const docRef = doc(fraganciasCollectionRef, id)

    const docSnapshot = await getDoc(docRef)

        const fragancia = {
            ...docSnapshot.data(),
            id: docSnapshot.id
        }

    return fragancia
}

export default db;