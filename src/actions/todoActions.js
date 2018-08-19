import {FETCH_TODOS, ADD_TODO} from "./types";

export const fetchTodos = () => dispatch => {
    console.log('fetching');
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(rep => rep.json())
        .then(todos => {
                // console.log(todos)
                dispatch({
                    type: FETCH_TODOS,
                    paylod: todos
                })
            }
        )

}
export const addTodo = (todo) => dispatch => {
    console.log('addTodo')
    fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(todo => {
                    // console.log(todos)
                    dispatch({
                        type: ADD_TODO,
                        paylod: todo
                    })
                }
            )

}