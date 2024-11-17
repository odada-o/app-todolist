"use client";

import { useReducer, useEffect } from "react";
import { todoReducer, initialState, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "@/reducers/todoReducer";
import TodoHd from "@/components/TodoHd";
import TodoEditor from "@/components/TodoEditor";
import TodoList from "@/components/TodoList";
import {TodoProvider} from "@/contexts/TodoContext";

const Todo = () => {
  return (
      <TodoProvider>
        <div className="flex flex-col gap-5">
          {/* props 전달하지 않음 */}
          <TodoHd />
          <TodoEditor />
          <TodoList />
        </div>
      </TodoProvider>
  );
};

export default Todo;