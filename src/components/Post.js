import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
                title: '',
                completed: '',

        }
    }

    addTodo = (e) => {
        e.preventDefault();





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
                    <Form onSubmit={this.addTodo}>
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

export default Post;