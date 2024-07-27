import Carousel from 'react-bootstrap/Carousel';
import Group1 from "../../images/Group1.png";
import Group2 from "../../images/Group2.jpg";
import Group3 from "../../images/Group3.jpg";
import '../../style/image.css'
import {Button} from 'react-bootstrap';


function LandingPage() {
    return (
        <div className="landingPage">
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Group1}
            alt="First slide"
            />
            <Carousel.Caption>
            <Button variant="success" type="submit" className="shadow-sm fw-bold px-5" href="/form-user">
            +  Lapor Insiden
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Group2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <Button variant="success" type="submit" className="shadow-sm fw-bold px-5" href="/form-user">
            +  Lapor Insiden
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Group3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <Button variant="success" type="submit" className="shadow-sm fw-bold px-5" href="/form-user">
            +  Lapor Insiden
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default LandingPage;