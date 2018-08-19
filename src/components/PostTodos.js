import React, { Component } from "react";
import {Form, FormGroup, Label, Input} from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions'

class PostTodos extends Component {

    constructor(props) {
        super(props);

        this.state = {
                title: '',
                completed: '',
        }
    }

    submitTodo = (e) => {
        e.preventDefault();

        const todo = {
            title: this.state.title,
            completed: this.state.completed,
        }

        // Moved into todoActions
        /*fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))*/

        this.props.addTodo(todo)
    }



    handleChange =  (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        return (
            <div className="container">

            <div className="row">

                <div className="col-lg-4" >
                    <Form onSubmit={this.submitTodo}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="complete">Select Multiple</Label>
                            <Input type="select" name="completed" id="complete" value={this.state.completed} onChange={this.handleChange}>
                                <option>True</option>
                                <option>False</option>
                            </Input>
                        </FormGroup>
                        <button>Add</button>
                    </Form>
                </div>
            </div>
                <hr/>

            </div>

        );
    }

}

PostTodos.propTypes = {
    addTodo: PropTypes.func.isRequired
}



export default connect(null, { addTodo })(PostTodos);