import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdate, onDelete }) => {

    // state를 이용하여 input에 입력된 검색어를 관리합니다.
    const [search, setSearch] = useState('');

    // input에 입력된 검색어를 상태로 관리합니다.
    const onChangeSearch = e => {
        setSearch(e.target.value);
    };

    // 검색어를 포함하는 할 일 목록을 저장합니다.
    const filteredTodo = () => {
        // 검색어가 포함된 할 일 목록을 반환합니다.
        // todo.filter() 함수는 todo 배열을 순회하면서 검색어가 포함된 할 일 목록을 반환합니다.
        // toLowerCase()를 이용하여 검색어와 할 일 목록의 task를 소문자로 변경합니다.
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
                {/* 할 일 목록을 출력합니다. */}
                {filteredTodo().map((todo) => (
                    <TodoItem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo} />
                ))}
                
            </ul>
        </div>
    );
};

export default TodoList;