import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import App from "./App.vue";
import router from "./router";

import"bootstrap/dist/css/bootstrap.css";
import"bootstrap/dist/js/bootstrap.js";


import"bootstrap-icons/font/bootstrap-icons.css";

//import "./assets/main.css";

const app = createApp(App);
const firebaseConfig = {
  apiKey: "AIzaSyBRTzS-61OfVKBQNNc6crVade9MPloZLXY",
  authDomain: "fir-projectx-6aefb.firebaseapp.com",
  projectId: "fir-projectx-6aefb",
  storageBucket: "fir-projectx-6aefb.appspot.com",
  messagingSenderId: "67352687616",
  appId: "1:67352687616:web:566c6aa90b42bb6a3394e5",
  measurementId: "G-KV9JLZC2B1",
};

app.use(createPinia());
app.use(router);

const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
app.mount("#app");
