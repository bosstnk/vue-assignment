<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ store.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="store.username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
        <CourseCard 
          v-for="course in courses" 
          :key="course.id" 
          :course="course"
        />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import axios from "axios";
import { useFavoriteStore } from "../stores/favorite";
const courses = ref([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
onMounted (async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    courses.value = res.data
    console.log(courses.value)
  }
  catch (error) {
    console.error(error)
  }
})
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
const store = useFavoriteStore();
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
}
</style>
