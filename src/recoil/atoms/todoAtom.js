import { atom } from "recoil";

export const todoListAtom = atom({
  key: "todoListState", // Unique key for this atom
  default: [
    {
      text: "drink coffee",
      id: 1233,
      isCompleted: false,
    },
  ], // Initial state as an array of todo items
});
