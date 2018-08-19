import {FETCH_TODOS, NEW_TODOS} from "./types";

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