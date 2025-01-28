import React from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";
const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newValue = { ...item, isComplete: !item.isComplete };

    const replaceItemAtIndex = (arr, index, newValue) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      };

    const newList = replaceItemAtIndex(todoList, index, newValue)

    setTodoList(newList);

  };

  const editItemText = (e) => {

    const replaceItemAtIndex = (arr, index, newValue) => {
      return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };

    const newList = replaceItemAtIndex(todoList, index, newValue);

    const newValue = { ...item, text: e.target.value };

    setTodoList([
      ...todoList.slice(0, index),
      newValue,
      ...todoList.slice(index + 1),
    ]);
  };

  const deleteItem = () => {

    const removeItemAtIndex = (arr, index) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      };

      const newList = removeItemAtIndex(todoList, index);
  
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  return (
    <div className="container">
      <input
        className={item.isComplete === true ? "done-task" : null}
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button className="del-btn" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
