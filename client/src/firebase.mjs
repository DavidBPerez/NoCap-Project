import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

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
    .then(async (result) => {
      const user = result.user;
      console.log("Google Sign-In Success", user);

      const userRef = ref(database, 'users/' + user.uid);
      const userSnapshot = await get(userRef);

      if (!userSnapshot.exists()) {
        const userData = {
          username: user.displayName,
          email: user.email,
          // Add additional fields as needed (age, gender, etc.)
        };

        set(userRef, userData)
          .then(() => {
            console.log("User data successfully stored in the database");
          })
          .catch((error) => {
            console.error("Error storing user data in the database", error);
          });
      }

      navigate('/character_creation');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Google Sign-In Error", errorCode, errorMessage);
    });
}
