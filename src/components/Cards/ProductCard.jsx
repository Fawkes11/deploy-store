import {Card, Button} from 'react-bootstrap'
import '../../styles/productCard.css'


const ProductCard = (props) => {
    return (
        <Card className='productCard' style={{ width: '18rem', borderRadius: '20px' }}>
            <Card.Img className='productCardImg' variant="top" src={props.photo} style={{width: '260px', borderRadius: '10px'}} />
            <Card.Body className='productCardBody'>
                <Card.Title className='productCardtitle'>{props.name} {props.type}</Card.Title>
                <Card.Text>$ {props.price}</Card.Text>
                <Button className='productCardButton'>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;

