export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

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

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

// ############################################
export const fetchTodos = () => {
  return (dispatch) => {
    return ApiUtil.fetchTodos().then(todos => {
      return dispatch(receiveTodos(todos))
    });
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return ApiUtil.createTodo(todo).then(response => {
      return dispatch(receiveTodo(response));
    });
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    return ApiUtil.updateTodo(todo).then(response => {
      // return dispatch(receiveTodo(response));
      return dispatch(fetchTodos());
    });
  };
};

export const deleteTodo = (todo) => {
  return (dispatch) => {
    return ApiUtil.deleteTodo(todo).then(response => {
      return dispatch(fetchTodos());
    });
  };
};

