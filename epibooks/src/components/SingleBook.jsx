import { Container, Row , Col , Card} from 'react-bootstrap'


const SingleBook = (props) =>{
    return(

        <Container>
            <Row className='justify-content-center'>
                <Col>
                    <Card>
                    <Card.Img variant="top" src={props.book.img} />
                            <Card.Body>
                                <Card.Title>{props.book.title}</Card.Title>
                            </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBook