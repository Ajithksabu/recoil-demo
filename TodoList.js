import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {filteredTodoListState} from "../store";
import {TodoItemCreator} from "./TodoItemCreator";
import {TodoItem} from "./TodoItem";
import {TodoListFilters} from "./TodoListFilters";
import {TodoListStats} from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );  }

  export default TodoList;