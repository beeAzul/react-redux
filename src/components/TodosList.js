import React, {Component} from "react";
import { Button } from "reactstrap";
import { connect } from 'react-redux';
import {fetchTodos} from "../actions/todoActions";
import PropTypes from 'prop-types';

class TodosList extends Component {

    // Now fetch() is moved to the todoActions.js
    /*constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }*/
    /*componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(rep => rep.json())
            .then(data => {
                    // console.log(data);
                    this.setState( {todos: data} )
                }
            )

    };*/

    componentDidMount() {
        this.props.fetchTodos();
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.newTodo) {
            this.props.todos.unshift(nextProps.newTodo)
        }
    }

    render() {

        return (
            <div className="container">
                { this.props.todos.map( task => (
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
TodosList.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.object
}
const mapStateToProps = state => ({
    todos: state.todos.items,
    newTodo: state.todos.item
})

export default connect(mapStateToProps, { fetchTodos })(TodosList);