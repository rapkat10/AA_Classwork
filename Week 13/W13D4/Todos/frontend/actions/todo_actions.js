export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

import * as ApiUtil from '../util/todo_api_util';

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO, 
    todo: {id: todo.id, title: todo.title}
  };
};

export const receiveTodos = (todosArr) => {
  return {
    type: RECEIVE_TODOS,
    todos: todosArr
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    return ApiUtil.fetchTodos().then(todos => {
      dispatch(receiveTodos(todos))
    });
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return ApiUtil.createTodo(todo).then(response => {
      dispatch(receiveTodo(response))
    });
  };
};



