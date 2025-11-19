import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCusGgN9bK0aYLjCA88MtYHzNZNuBI0qcA",
  authDomain: "abracoliterario-e9685.firebaseapp.com",
  projectId: "abracoliterario-e9685",
  storageBucket: "abracoliterario-e9685.firebasestorage.app",
  messagingSenderId: "653907586044",
  appId: "1:653907586044:web:871623ccaaa90b40bca079",
  measurementId: "G-FN6G4E9T1R"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Auth, para que possamos autenticar os usuários do sistema
export const auth = getAuth(app);