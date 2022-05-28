import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_4QiLZTq655RzRj1s1cnCua6CDjOJyhI",
  authDomain: "tasks-firebase-example.firebaseapp.com",
  projectId: "tasks-firebase-example",
  storageBucket: "tasks-firebase-example.appspot.com",
  messagingSenderId: "185763358176",
  appId: "1:185763358176:web:5748657b09be8e83c9b785"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw e;
  }
};

const registerWithEmailAndPassword = async (name, email, password, gender, tel, userRoles) => {
  const adminUser = auth.currentUser;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // Update profile name
    updateProfile(res.user, {
      displayName: name
    }).then(() => {
      console.log(`User ${res.user.displayName} (UID: ${res.user.uid}) created`)

      addDoc(collection(db, "users"), {
        uid: res.user.uid,
        name,
        email,
        password,
        gender,
        tel,
        isAdmin: false,
        isActive: true,
        roles: userRoles,
      });
    });
  } catch (err) {
    throw err;
  }
  //sendPasswordReset(email);
  auth.updateCurrentUser(adminUser)
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw err;
  }
};

const logout = () => {
  try {
    signOut(auth);
  }
  catch (err) {
    throw err;
  }
};

export {
  app,
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
