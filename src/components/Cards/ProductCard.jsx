import React, {useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import CartContext from '../../modules/CartContext'
import '../../styles/productCard.css'
import ProductPopup from '../ProductPopup'




const ProductCard = (props) => {

    const CartCxt = useContext(CartContext)

    const [trigger, setTrigger] = useState(false)
    const [hover, setHover] = useState(false);

    return (
        <Card className='productCard' style={{ width: '18rem', borderRadius: '20px' }}>

            <ProductPopup CartCxt={CartCxt} prevProduct={props} trigger={trigger} setTrigger={setTrigger}>
                    <h3>This is my popup</h3>
            </ProductPopup>

            <div
                className='productOverflow'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >

                {
                    hover
                    &&
                    <Button className='buttonAddToCar' onClick={()=> setTrigger(true)}>
                        Vista previa
                    </Button>
                }

                

                <Card.Img
                    className={`productCardImg ${hover && 'hover'}`}
                    variant="top"
                    src={props.photo}
                />

            </div>

            <Card.Body className='productCardBody'>
                <Card.Title className='productCardtitle'>{props.name} {props.type}</Card.Title>
                <Card.Text>$ {props.price}</Card.Text>
                <Button className='productCardButton' onClick={() => CartCxt.addToCart(props)}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;

