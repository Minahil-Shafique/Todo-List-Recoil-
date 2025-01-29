import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const todoListAtom = atom({

  key: "todoListState", // Unique key for this atom
  default: [
    {
      text: "drink coffee",
      id: 1233,
      isCompleted: false,
    },
  ], 
  effects_UNSTABLE: [persistAtom]
});
