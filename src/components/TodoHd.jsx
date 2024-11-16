import React from 'react';
import {format} from "date-fns";

const TodoHd = () => {
    return (
        <div>
            <h1>📝 할 일 관리 앱</h1>
            <strong>{format(new Date(), 'yyyy.MM.dd')}</strong>
            <p>오늘의 할 일을 적어보세요.</p>
        </div>
    );
};

export default TodoHd;  