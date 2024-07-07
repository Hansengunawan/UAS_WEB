import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Group1 from '../images/Group1.png'

const News = () =>  {
    return (
        <div>
            <h3 className="d-flex justify-content-center fw-bold">Berita Terkini</h3>
            <h1 className="d-flex justify-content-center" >_</h1>

            <CardGroup className="mx-5 my-5 px-5">
            <Card>
                <Card.Img variant="top" src={Group1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                    This card has supporting text below as a natural lead-in to
                    additional content.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Baca Selengkapnya -></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Group1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                    This card has supporting text below as a natural lead-in to
                    additional content.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Baca Selengkapnya -></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Group1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                    This card has supporting text below as a natural lead-in to
                    additional content.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Baca Selengkapnya -></small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>
    );
}

export default News;