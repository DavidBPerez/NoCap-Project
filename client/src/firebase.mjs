import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWK_oWsNBDfueou3cpXroXYCGV7EcWN_I",
  authDomain: "no-cap-24314.firebaseapp.com",
  projectId: "no-cap-24314",
  storageBucket: "no-cap-24314.appspot.com",
  messagingSenderId: "671496096136",
  appId: "1:671496096136:web:ce772ececeb3f93635d23d",
  measurementId: "G-R3ZX082BBW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Storing data
const database = getDatabase(app);

export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

export function storeUserData(userId, email, username, age, gender) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: username,
    email: email,
    age: age,
    gender: gender,
  })
    .then(() => {
      console.log("Data successfully stored");
    })
    .catch((error) => {
      console.error("Error Storing Data");
    });
}

export function signInWithGoogle(navigate) {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Google Sign-In Success", user);
      navigate('/character_creation'); // Redirect after successful sign-in
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Google Sign-In Error", errorCode, errorMessage);
    });
}
