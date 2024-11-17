"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import { todoReducer, initialState, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "@/reducers/todoReducer";

// Context 생성
// 문법 : const context = createContext(defaultValue);
const TodoContext = createContext();

// Custom Hook
// 문법 : const customHook = () => useContext(context);
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

// Provider 컴포넌트
// 문법 : const Provider = ({ children }) => { return <context.Provider value={value}>{children}</context.Provider>; };
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const LOCAL_STORAGE_KEY = "my-todo-app-todos";

  // 로컬 스토리지에서 초기 상태 로드
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    savedTodos.forEach((todo) => dispatch({ type: ADD_TODO, payload: todo }));
  }, []);

  // 상태 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // 할 일 추가
  const addTodo = (task) => {
    dispatch({ type: ADD_TODO, payload: { task } });
  };

  // 완료 상태 업데이트
  const onUpdate = (id) => {
    dispatch({ type: UPDATE_TODO, payload: { id } });
  };

  // 할 일 삭제
  const onDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: { id } });
  };

  const value = {
    todos,
    addTodo,
    onUpdate,
    onDelete,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
