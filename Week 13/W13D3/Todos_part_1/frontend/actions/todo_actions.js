export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


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

