import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FantasyBooks from '../data/fantasy.json'
import HistoryBooks from '../data/history.json'
import HorrorBooks from '../data/horror.json'
import RomanceBooks from '../data/romance.json'
import ScifiBooks from '../data/scifi.json'

const AllTheBooks = () => {
  return (

    <Container>
        <Row className='justify-content-center'>
                <h3 className='col-12 my-3'>Fantasy</h3>

                    {FantasyBooks.slice(0,6).map((singleBook)=>{
                        return (
                            <Card key={singleBook.asin} className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-2">
                            <Card.Img variant="top" src={singleBook.img} />
                            <Card.Body>
                                <Card.Title>{singleBook.title}</Card.Title>
                                <Card.Text>
                                {singleBook.category}
                                </Card.Text>
                                <Button variant="primary">${singleBook.price}</Button>
                            </Card.Body>
                            </Card>
                        )
                    })}
                <h3 className='col-12 my-3'>History</h3>

                    {HistoryBooks.slice(0,6).map((singleBook)=>{
                        return (
                            <Card key={singleBook.asin} className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-2">
                            <Card.Img variant="top" src={singleBook.img} />
                            <Card.Body>
                                <Card.Title>{singleBook.title}</Card.Title>
                                <Card.Text>
                                {singleBook.category}
                                </Card.Text>
                                <Button variant="primary">${singleBook.price}</Button>
                            </Card.Body>
                            </Card>
                        )
                    })}
                <h3 className='col-12 my-3'>Horror</h3>

                    {HorrorBooks.slice(0,6).map((singleBook)=>{
                        return (
                            <Card key={singleBook.asin} className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-2">
                            <Card.Img variant="top" src={singleBook.img} />
                            <Card.Body>
                                <Card.Title>{singleBook.title}</Card.Title>
                                <Card.Text>
                                {singleBook.category}
                                </Card.Text>
                                <Button variant="primary">${singleBook.price}</Button>
                            </Card.Body>
                            </Card>
                        )
                    })}
                <h3 className='col-12 my-3'>Romance</h3>

                    {RomanceBooks.slice(0,6).map((singleBook)=>{
                        return (
                            <Card key={singleBook.asin} className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-2">
                            <Card.Img variant="top" src={singleBook.img} />
                            <Card.Body>
                                <Card.Title>{singleBook.title}</Card.Title>
                                <Card.Text>
                                {singleBook.category}
                                </Card.Text>
                                <Button variant="primary">${singleBook.price}</Button>
                            </Card.Body>
                            </Card>
                        )
                    })}
                <h3 className='col-12 my-3'>Scifi</h3>

                    {ScifiBooks.slice(0,6).map((singleBook)=>{
                        return (
                            <Card key={singleBook.asin} className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-2">
                            <Card.Img variant="top" src={singleBook.img} />
                            <Card.Body>
                                <Card.Title>{singleBook.title}</Card.Title>
                                <Card.Text>
                                {singleBook.category}
                                </Card.Text>
                                <Button variant="primary">${singleBook.price}</Button>
                            </Card.Body>
                            </Card>
                        )
                    })}

        </Row>
    </Container>
  );
}

export default AllTheBooks;