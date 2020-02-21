export const fetchTodos = () =>
    $.ajax({
        method: "GET",
        url: "/api/todos"
    }
);

export const createTodo = (todo) =>
    $.ajax({
        method: "POST",
        url: "/api/todos",
        data: {
            todo: {
                title: todo.title,
                body: todo.body,
                done: todo.done
            }
        }
    }
);

