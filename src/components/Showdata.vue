<template>
  <div>
    <h1>Menu</h1>
  </div>

  <div class="container">
    <label for="inputPassword5" class="form-label">ชื่อภาษาไทย</label>
    <input
      type="text"
      id="inputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
      v-model="menu.nameTH"
    />
    <label for="inputPassword5" class="form-label">Name</label>
    <input
      type="text"
      id="inputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
      v-model="menu.nameEn"
    />
    <label for="inputPassword5" class="form-label">ราคา</label>
    <input
      type="number"
      id="inputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
      v-model="menu.price"
    />
    <label for="inputPassword5" class="form-label">รายละเอียด</label>
    <input
      type="text"
      id="inputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
      v-model="menu.detail"
    />
    <br />

    <div class="btngrop row gap-5">
      <button type="submit" class="btn btn-light col" @click="addUserData()">
        Addmenu
      </button>
      <button type="submit" class="btn btn-light col" @click="showmenu()">
        Showmenu
      </button>
    </div>

    <div class="printgrop">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ชื่อภาษาไทย</th>
            <th scope="col">Name</th>
            <th scope="col">ราคา</th>
            <th scope="col">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(menuItem, index) in allmenu" :key="index">
            <td>{{ menuItem.data.nameTH }}</td>
            <td>{{ menuItem.data.nameEn }}</td>
            <td>{{ menuItem.data.price }}</td>
            <td>{{ menuItem.data.detail }}</td>
            <td>
              {{ menuItem.data.id }} <br />
              <button @click="deleatMenu(menuItem.id)">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <footer>ถ้ากดปุ่มลบรีหน้าเว็บ1รอบ</footer>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../main.js";

const menu = ref({ nameTH: "", nameEn: "", price: 0, detail: "" });
const allmenu = ref([]);

async function addUserData() {
  try {
    const docRef = await addDoc(collection(db, "foodmenu"), menu.value);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function showmenu() {
  const querySnapshot = await getDocs(collection(db, "foodmenu"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const myDoc = ref({ id: doc.id, data: doc.data() });
    allmenu.value.push(myDoc.value);
  });
}

async function deleatMenu(id) {
  await deleteDoc(doc(db, "foodmenu", id));
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  justify-items: center;
}

.printgrop {
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>
