<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <!-- TODO: ดึง username และ favorites.length จาก store -->

    <div v-if="store.username && store.favorites.length > 0">
      <p>ชื่อผู้ใช้: {{ store.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ store.favorites.length }}</p>
    </div>

    <div v-else>
      <p>ยังไม่มีข้อมูลการเลือกคอร์ส</p>
    </div>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore }
import { useFavoriteStore } from '../stores/favorite';
const store = useFavoriteStore()
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
