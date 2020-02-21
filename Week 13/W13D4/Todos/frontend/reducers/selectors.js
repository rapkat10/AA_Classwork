const allTodos = (state) => {
    let todos = [];
    const todosKeys = Object.keys(state.todos);
    todosKeys.forEach(key => {
        todos.push(state.todos[key]);
    })
    return todos;
} 

export default allTodos;