import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleComment extends Component{
    render(){
        return(
            <Card.Body key={this.props.comment._id}>
                            <Card.Title>{this.props.comment.author}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.props.comment.createdAt}</Card.Subtitle>
                            <Card.Text>{this.props.comment.comment}</Card.Text>
                        </Card.Body>
    
        )
    }
}

export default SingleComment 