import { Component } from "react";
import { Card } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component{
    render(){
        return(

            <Card>
                {this.props.comments.map((c) => {
                    return <SingleComment comment={c} />
                })}
            </Card>
        )
    }
}

export default CommentList