import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("register").onclick = () => {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  ).then(() => {
    window.location = "dashboard.html";
  });
};

document.getElementById("login").onclick = () => {
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  ).then(() => {
    window.location = "dashboard.html";
  });
};
