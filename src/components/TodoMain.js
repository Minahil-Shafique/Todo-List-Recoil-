import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListSelector } from "../recoil/selectors/filteredTodoListSelector";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import FilterDropdown from "./FilterDropDown";

const TodoMain = () => {
  const filteredTodoList = useRecoilValue(filteredTodoListSelector);

  return (
    <div className="parent-container">
      <div>
        <TodoItemCreator />
        <FilterDropdown />
        {filteredTodoList.length > 0 ? (
          <div style={{ color: "white" }} className="todos-list">
            {filteredTodoList.map((filterItem) => (
              <TodoItem key={filterItem.id} item={filterItem} />
            ))}
          </div>
        ) : (
          <div style={{ color: "white" }} className="todos-list">
            No tasks match the current filter...
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoMain;
