import { writable } from "svelte/store";

export function getUserStore() {
  let taskPerCategory = writable(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  taskPerCategory.subscribe((val) => {
    localStorage.setItem("user", JSON.stringify(val));
  });

  return taskPerCategory;
}
