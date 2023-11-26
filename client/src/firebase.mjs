// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWK_oWsNBDfueou3cpXroXYCGV7EcWN_I",
  authDomain: "no-cap-24314.firebaseapp.com",
  projectId: "no-cap-24314",
  storageBucket: "no-cap-24314.appspot.com",
  messagingSenderId: "671496096136",
  appId: "1:671496096136:web:ce772ececeb3f93635d23d",
  measurementId: "G-R3ZX082BBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Storing data
const database = getDatabase(app);

export function createUser(email, password) {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export function storeUserData(userId, email, username, age, gender) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: username,
    email: email,
    age: age,
    gender: gender
  }).then(() => {
    console.log("Data successfully stored")
  }).catch((error) => {
    console.log("Error Storing Data");
  });
}
