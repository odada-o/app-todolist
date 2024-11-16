"use client"

import { useState } from "react";
import TodoHd from "@/components/TodoHd";
import TodoEditor from "@/components/TodoEditor";
import TodoList from "@/components/TodoList";
import { mockTodoData } from "@/data";

const Todo = () => {
  const [todos, setTodos] = useState(mockTodoData);

  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      task,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]); // 새로운 할 일을 기존 목록 앞에 추가
  };

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
