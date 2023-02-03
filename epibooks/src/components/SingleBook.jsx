import { Component } from 'react'
import { Container, Row , Col , Card} from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component{
    state = {
        selected: false,
    }
    render(){
        
        return(
        
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <Card onClick={() => this.setState({ selected: !this.state.selected })}
                        style={{ border: this.state.selected ? '3px solid red' : 'none' }}>
                        <Card.Img variant="top" src={this.props.book.img} />
                                <Card.Body>
                                    <Card.Title>{this.props.book.title}</Card.Title>
                                </Card.Body>
        
                        </Card>

                        {this.state.selected && 
                        <CommentArea asin={this.props.book.asin}/>}
                    </Col>
                </Row>
            </Container>
            
        )
    }
}


export default SingleBook