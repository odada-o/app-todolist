// 액션 타입 정의
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// 초기 상태
export const initialState = [];

// Reducer 함수
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length + 1,
          task: action.payload.task,
          isDone: false,
          createdDate: new Date().getTime(),
        },
        ...state,
      ];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};