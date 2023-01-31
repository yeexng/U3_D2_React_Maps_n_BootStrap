import { Jumbotron, Button, Container } from "react-bootstrap";

const Welcome = () =>{
    return(
        <Jumbotron style={{backgroundImage: `url("https://images.unsplash.com/photo-1485990005353-9abcf694f3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}}>
            <Container>
                <h1 className="text-light">Welcome!</h1>
                <p className="text-light">Time to be a Bookworm!</p>
                <p><Button>Learn more</Button></p>
            </Container>
        </Jumbotron>
    )
}

export default Welcome