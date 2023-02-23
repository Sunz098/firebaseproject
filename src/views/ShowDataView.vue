<template>
    <div>
        <showdata></showdata>
    </div>
    <div class="d-flex justify-content-end pe-5">
        <button @click="logout()" type="button" class="btn btn-danger">Logout</button>
    </div>
</template> 

<script setup>
import showdata from "../components/Showdata.vue"
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

function logout(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  router.push("/")
}).catch((error) => {
    console.log(error);
  // An error happened.
});

}
</script>