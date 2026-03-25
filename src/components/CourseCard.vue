<template>
  <div class="course-list">
    <div class="course-card">
      <h3>{{ course.title }}</h3>
      <p> {{course.price}} </p>
      <button :disabled="!store.username" @click="store.addFavorite(course)">
        เพิ่มในรายการโปรด
      </button>
    </div>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore } แล้วเขียนฟังก์ชันเพิ่มคอร์สลง store
// TODO: defineProps({ course: Object })
import { useFavoriteStore } from "../stores/favorite";
const { course } = defineProps(["course"]);
const store = useFavoriteStore();

</script>

<style scoped>
.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: auto;
  padding: 16px;
}

.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
  color: black;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

p {
  margin: 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2c9c6d;
}
</style>
