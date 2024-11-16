import React, { useRef, useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    // 할 일을 입력하는 input 상태를 관리합니다.
    const [task, setTask] = useState('');
    // inputRef 변수가 useRef()로 생성됩니다.
    // 연결된 input 요소에 포커스를 맞추기 위해 사용합니다.
    const inputRef = useRef();

    // input에 할 일이 입력되면 입력한 값을 task 상태에 업데이트하는 함수를 만듭니다.
    const onChangeTask = e => setTask(e.target.value);

    // 추가 버튼을 클릭하면 할 일을 추가하는 함수를 호출합니다.
    const onSubmit = () => {
      // task가 빈 문자열이면 함수를 종료합니다.
      if (!task) return
      // 할 일을 추가하는 함수를 호출합니다.
      addTodo(task);
      // 할 일을 추가한 후 input을 초기화합니다.
      setTask('')
      // input에 포커스를 맞춥니다.
      inputRef.current.focus();
    };

    // input에서 Enter 키를 누르면 할 일을 추가하는 함수를 호출합니다.
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <div>
            <h2>새로운 Todo 작성하기 ✏ </h2>
            <div>
                {/* task 상태값을 value로 설정 */}
                {/* onChange 이벤트에 onChangeTask 함수를 연결 */}
                {/* placeholder에 할 일을 입력해주세요. 라는 안내 문구를 표시 */}
                {/* 추가 버튼을 클릭하면 onSubmit 함수를 호출 */}
                {/* inputRef 변수를 사용하여 input 요소에 포커스를 맞춥니다. */}
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