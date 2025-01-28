import React from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";
import { useState } from "react";
const TodoItemCreator = () => {
  const [_, setTodoList] = useRecoilState(todoListAtom);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = (e) => {
    if (inputValue) {
      setTodoList((prevTodos) => [
        ...prevTodos,
        {
          text: inputValue,
          isCompleted: false,
          id: Math.random() * 100 + 1,
        },
      ]);
      setInputValue("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={handleAddTodo}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
