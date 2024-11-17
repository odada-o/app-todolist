import React, { useCallback, useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import {useTodoContext} from "@/contexts/TodoContext";

const TodoList = () => {

    // useTodoContext()를 통해 todos, onUpdate, onDelete 함수를 가져온다.
    const { todos, onUpdate, onDelete } = useTodoContext();
    const [search, setSearch] = useState('');

    // 검색어 변경 핸들러를 useCallback으로 메모이제이션
    const onChangeSearch = useCallback(e => {
        setSearch(e.target.value);
    }, []);

    // 검색된 할 일을 useMemo로 캐싱
    const filteredTodo = useMemo(() => {
        return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
    }, [todos, search]);


    // TodoItem에서 사용할 핸들러를 useCallback으로 메모이제이션
    const handleUpdate = useCallback((id) => onUpdate(id), [onUpdate]);
    const handleDelete = useCallback((id) => onDelete(id), [onDelete]);

    return (
        <div>
            <h2>할 일 목록 📃</h2>
            <input
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"/>

            <ul>
                {filteredTodo().map((todo) => (
                    <TodoItem 
                    key={todo.id} 
                    onUpdate={() => handleUpdate(todo.id)} // 메모이제이션된 업데이트 핸들러
                    onDelete={() => handleDelete(todo.id)} // 메모이제이션된 삭제 핸들러 {...todo} 
                    />
                ))}
                
            </ul>
        </div>
    );
};

export default TodoList;