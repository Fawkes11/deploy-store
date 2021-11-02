import {Card} from 'react-bootstrap'


const ServiceCard = (props) => {
    return (
        <Card style={{ width: '18rem', borderRadius: '20px' }}>
            <Card.Img variant="top" src={props.photo} style={{width: '260px', borderRadius: '10px'}} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.position}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard;