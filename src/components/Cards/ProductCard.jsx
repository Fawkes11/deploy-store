import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import '../../styles/productCard.css'


const ProductCard = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <Card className='productCard' style={{ width: '18rem', borderRadius: '20px' }}>
            <div
                className='productOverflow'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {hover && <Button className='buttonAddToCar'>Vista previa</Button>}
                <Card.Img
                className={`productCardImg ${hover && 'hover'}`}
                variant="top"
                src={props.photo}
                />
            </div>

            <Card.Body className='productCardBody'>
                <Card.Title className='productCardtitle'>{props.name} {props.type}</Card.Title>
                <Card.Text>$ {props.price}</Card.Text>
                <Button className='productCardButton'>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;

