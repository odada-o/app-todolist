"use client";

import { useReducer, useEffect } from "react";
import { todoReducer, initialState, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "@/reducers/todoReducer";
import TodoHd from "@/components/TodoHd";
import TodoEditor from "@/components/TodoEditor";
import TodoList from "@/components/TodoList";

// 로컬 스토리지 키 선언
const LOCAL_STORAGE_KEY = "my-todo-app-todos";

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // 로컬 스토리지에서 초기 상태 로드
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    savedTodos.forEach((todo) => dispatch({ type: ADD_TODO, payload: todo }));
  }, []);

  // 상태 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // 할 일을 추가하는 함수
  const addTodo = (task) => {
    dispatch({ type: ADD_TODO, payload: { task } });
  };

  // 완료 상태를 업데이트하는 함수
  const onUpdate = (id) => {
    dispatch({ type: UPDATE_TODO, payload: { id } });
  };

  // 할 일을 삭제하는 함수
  const onDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: { id } });
  };

  return (
    <div className="flex flex-col gap-5">
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;