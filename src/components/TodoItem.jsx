import React from 'react';

// React.memo를 사용하여 동일한 props가 전달되면 컴포넌트 리렌더링을 방지.
const TodoItem = React.memo(({ id, isDone, task, createdDate, onUpdate, onDelete }) => {
  console.log(`TodoItem ${task}: isDone = ${isDone}`); // 추가

  return (
    <div>
      <li key={id}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={onUpdate} // 부모에서 전달받은 핸들러 호출
        />
        <span className={`${isDone ? 'line-through text-gray-400' : 'no-underline text-black'}`}>
          {task}
        </span>
        <span>{new Date(createdDate).toLocaleDateString()}</span>
        <button onClick={() => onDelete(id)}>삭제</button>
      </li>
    </div>
  );
});

// displayName 추가
TodoItem.displayName = 'TodoItem';

export default TodoItem;