import React, { useState } from 'react';
import TodoItem from './TodoItem';
import {useTodoContext} from "@/contexts/TodoContext";

const TodoList = () => {

    // useTodoContext()를 통해 todos, onUpdate, onDelete 함수를 가져온다.
    const { todos, onUpdate, onDelete } = useTodoContext();
    const [search, setSearch] = useState('');

    const onChangeSearch = e => {
        setSearch(e.target.value);
    };

    const filteredTodo = () => {
        return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div>
            <h2>할 일 목록 📃</h2>
            <input
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"/>
            <ul>
                {filteredTodo().map((todo) => (
                    <TodoItem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo} />
                ))}
                
            </ul>
        </div>
    );
};

export default TodoList;