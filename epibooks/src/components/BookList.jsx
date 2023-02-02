import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component{



    render(){
        return(
            <Container>
                <Form onSubmit={this.filterBookList}>
                    <Form.Control 
                        // value={this.state.query} onChange={(e) => {
                        // e.preventDefault();
                        // console.log(e.target.value);
                        // this.setState({ query: e.target.value });}} 
                        type="text" placeholder="Search Here..."/>
                </Form>

                    <Row className='justify-content-center'>
                    <h3 className='col-12 my-3'>Fantasy</h3>
                    {(this.props.listOfTheBooksAsProp).slice(0,12).map((singleBook)=>{
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