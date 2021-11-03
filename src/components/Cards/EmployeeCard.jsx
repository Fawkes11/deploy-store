import {Card} from 'react-bootstrap'
import '../../styles/employeeCard.css'


const ServiceCard = (props) => {
    return (
        <Card className='employeeCard' style={{ width: '18rem', borderRadius: '20px' }}>
            <Card.Img className='employeeCardImg' variant="top" src={props.photo} style={{width: '260px', borderRadius: '10px'}} />
            <Card.Body className='employeeCardBody'>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.position}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard;