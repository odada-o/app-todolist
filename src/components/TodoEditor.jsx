import React, { useRef, useState } from 'react';
import {useTodoContext} from "@/contexts/TodoContext";

const TodoEditor = () => {
    const [task, setTask] = useState('');
    const inputRef = useRef();
    const { addTodo } = useTodoContext();

    const onChangeTask = e => setTask(e.target.value);

    const onSubmit = () => {
      if (!task) return
      addTodo(task);
      setTask('')
      inputRef.current.focus();
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <div>
            <h2>새로운 Todo 작성하기 ✏ </h2>
            <div>
                <input
                ref={inputRef}
                value={task}
                onChange={onChangeTask}
                onKeyDown={onKeyDown}
                placeholder="할 일을 추가로 입력해주세요."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;