import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component{
    render(){
        return(
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="
                    username" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Rate the Book</option>
                    <option value="1">One ¬_¬</option>
                    <option value="2">Two =.=</option>
                    <option value="3">Three ~_~</option>
                    <option value="3">Four ^_^</option>
                    <option value="3">Five ^0^</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3 ml-5">
                Submit
                </Button>
            </Form>
        )
    }
}

export default AddComment 