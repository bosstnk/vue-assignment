// TODO1: สร้าง store ชื่อ useFavoriteStore
// state:
//   username (string)
//   favorites (array)
// actions:
//   setUsername(name) → เก็บชื่อผู้ใช้
//   addFavorite(course) → เพิ่มคอร์สใน favorites
import { defineStore } from "pinia";

type Course = {
  id: number;
  title: string;
  price: number;
};

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "" as string,
    favorites: [] as Course[]
  }),

  actions: {
    setUsername(name: string) {
      this.username = name;
    },

    addFavorite(course: Course) {
      const exists = this.favorites.find(item => item.id === course.id);

      if (!exists) {
        this.favorites.push(course);
      }
    }
  }
});