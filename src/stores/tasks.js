import { writable } from "svelte/store";

export function getTaskStore() {
  let taskPerCategory = writable(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        title: "default",
        tasks: [{ title: "default", description: "default", tags: [] }],
      },
      {
        title: "default",
        tasks: [
          { title: "default", description: "default", tags: ["work"] },
          {
            title: "default",
            description: "default",
            tags: ["gym", "Household chores"],
          },
        ],
      },
    ]
  );

  taskPerCategory.subscribe((val) => {
    localStorage.setItem("tasks", JSON.stringify(val));
  });

  return taskPerCategory;
}
