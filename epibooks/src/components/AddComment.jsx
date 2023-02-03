import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component{

    state = {
        review:{
            comment:"",
            rate:"",
            bookId: this.props.asin,
        }
    };

    uploadComment = async() =>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", 
            {  
                method: "POST",
                body: JSON.stringify(this.state.review),
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzUzNDYyODcsImV4cCI6MTY3NjU1NTg4N30.oaVIhmVyxOUdFP1mjGKJ2ncKPQY6Fz8qEyWjoCTuLcU",
                "Content-Type":"application/json"
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    render(){
        return(
            <Form onSubmit={(e) =>{e.preventDefault();
            this.uploadComment()}}>
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