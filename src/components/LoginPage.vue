<template>
  <div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        name="pwd"
        v-model="pwd"
      />
    </div>
    <div class="btngrop row gap-5">
      <button type="submit" class="btn btn-secondary col" @click="login()">Login</button>

      <button type="submit" class="btn btn-secondary col" @click="googlelogin()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-google"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
          />
        </svg>
      </button>
      <button type="submit" class="btn btn-secondary col" @click="register()">
        Register
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const pwd = ref("");
const provider = new GoogleAuthProvider();

function login() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User = " + user);
      router.push("show");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
}

function register() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User = " + user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      // ..
    });
}

function googlelogin() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user + token);
      router.push("show");

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode + errorMessage + email + credential);
      // ...
    });
}
</script>

<style scoped></style>
