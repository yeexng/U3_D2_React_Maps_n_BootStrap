import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = (props) =>{
    return(
        <Container>
            <Row className='justify-content-center'>
                <h3 className='col-12 my-3'>Fantasy</h3>
                {(props.listOfTheBooksAsProp).slice(0,12).map((singleBook)=>{
                    return(
                        <Col sm={10} md={5} lg={4} xl={3} key={singleBook.asin}>
                            <SingleBook book={singleBook} />
                            {/* singleBook value is extract from the map, therefore, should use singleBook, not props... */}
                        </Col>
                    )
                })}
                
            </Row>
        </Container>

    )

}

export default BookList