import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component{

    state = {
        searchQuery: '',
    }


    render(){
        return(
            <Container>
                <Form.Group>
                    <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={this.state.searchQuery}
                    onChange={(e) => this.setState({ searchQuery: e.target.value })}
                     />
                </Form.Group>

                    <Row className='justify-content-center'>
                    <h3 className='col-12 my-3'>Fantasy</h3>
                    {(this.props.listOfTheBooksAsProp).filter((b) =>
                    b.title.toLowerCase().includes(this.state.searchQuery)
                    ).map((singleBook)=>{
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


}

export default BookList