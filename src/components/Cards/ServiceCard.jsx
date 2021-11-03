import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../styles/ServiceCard.css'


const ServiceCard = (props) => {
    return (
        <Card className='serviceCard' style={{ width: '18rem' }}>
            <Card.Img className='serviceCardImg' variant="top" src={props.img} />
            <Card.Body className='serviceCardBody'>
                <Card.Title>{props.tittle}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Link to="/deploy-store/Services">
                    <Button variant="primary">Mas Info...</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard;