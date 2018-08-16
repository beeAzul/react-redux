import React, {Component} from "react";
import { Button } from "reactstrap";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }


    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(rep => rep.json())
            .then(data => {
                // console.log(data);
                    this.setState( {todos: data} )
                }
            )

    };


    render() {

        return (
            <div className="container">
                { this.state.todos.map( task => (
                            <Todo key={task.id} task={task}/>
                        )
                    )
                }
            </div>
        );
    }

}

const Todo = (props) => {
    return (
        <div className="row" key={props.task.id}>
            <div className="col-md-8 text-left">
                <h5>#{props.task.id} {props.task.title} -</h5>
            </div>
            <div className="col-md-4 text-right">
                <h5>{props.task.completed ? <Button color="success">Complete</Button> : <Button color="danger">Not Complete</Button>}</h5>
            </div>
        </div>
        )
};

export default TodoList;