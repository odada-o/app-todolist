import React from 'react';

const TodoItem = ({ id, isDone, task, createdDate, onUpdate, onDelete }) => {
  console.log(`TodoItem ${task}: isDone = ${isDone}`); // 추가

  return (
    <div>
      <li key={id}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onUpdate(id)}
        />
        <span className={`${isDone ? 'line-through text-gray-400' : 'no-underline text-black'}`}>
          {task}
        </span>
        <span>{new Date(createdDate).toLocaleDateString()}</span>
        <button onClick={() => onDelete(id)}>삭제</button>
      </li>
    </div>
  );
};
export default TodoItem;