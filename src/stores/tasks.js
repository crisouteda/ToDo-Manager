import { writable } from "svelte/store";

export function getTaskStore() {
  let taskPerCategory = writable(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        title: "default",
        tasks: [{ title: "default", description: "default" }],
      },
      {
        title: "default",
        tasks: [
          { title: "default", description: "default" },
          { title: "default", description: "default" },
        ],
      },
    ]
  );

  taskPerCategory.subscribe((val) => {
    console.log("subscribe");
    localStorage.setItem("tasks", JSON.stringify(val));
  });

  return taskPerCategory;
}
