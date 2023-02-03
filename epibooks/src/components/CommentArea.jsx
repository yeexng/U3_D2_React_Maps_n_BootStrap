import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component{
    state = {
        comment: []
    }

    fetchComment = async () =>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, 
            {  
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzUzNDYyODcsImV4cCI6MTY3NjU1NTg4N30.oaVIhmVyxOUdFP1mjGKJ2ncKPQY6Fz8qEyWjoCTuLcU"
                }
            })
            console.log(response)
            if (response.ok) {
                let data = await response.json();
                console.log(data)

                this.setState({
                    comment: data,
                })
                
            }else{
                console.log("error")
            }

        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.fetchComment()
    }

    render(){
        return (

            <div>
                <CommentList comments={this.state.comment} asin={this.props.asin}/>
                {/* <AddComment asin={this.props.asin}/> */}
            </div>
    
            )
    }
}

export default CommentArea