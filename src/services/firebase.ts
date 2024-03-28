import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9oRoS5DQh_Etb2mLFJ-2fqp3rrJsv_lU",
  authDomain: "tic-tac-toe-84471.firebaseapp.com",
  projectId: "tic-tac-toe-84471",
  storageBucket: "tic-tac-toe-84471.appspot.com",
  messagingSenderId: "901171213249",
  appId: "1:901171213249:web:097d9d89bd4bf879bd7540",
  measurementId: "G-VKCWQK60VK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const createNewSession = async () => {
  const session = await addDoc(collection(db, 'sessions'), {
    active: true,
    player_count: 0
  });

  return session;
}

export const getSession = async (sessionId: string) => {
  const sessionDb = await getDoc(
    doc(db, 'sessions', sessionId)
  );

  return sessionDb.data();
}