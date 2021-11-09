import React, { Children, useContext } from 'react'
import CartContext from '../modules/CartContext'
import { Image, Button, Col, Row } from 'react-bootstrap'
import '../styles/productPopup.css'
import { formatCurrency } from '../modules/string'



function ProductPopup(props) {
    const CartCtx = useContext(CartContext)

    return (props.trigger)
    ? (
        <div className='popup'>
            <div className='popup-inner'>
                <Row>
                    <Col>
                        <Image src={props.prevProduct.photo} width='420px' style={{borderRadius: '6px'}}></Image>
                    </Col>
                    <Col>
                        <h5 style={popupStyles.h6}>
                            {props.prevProduct.name} {props.prevProduct.type} | {props.prevProduct.size}
                        </h5>
                        <span style={popupStyles.span}>$ {props.prevProduct.price}</span>
                        <p style={popupStyles.p}>{props.prevProduct.ingredientes}</p>
                        {props.prevProduct.size === 'familiar' && <p style={popupStyles.pb}>Para Compartir, ocho porciones.</p>}
                        <Button
                            style={popupStyles.button}
                            className='productCardButton'
                            onClick={() => CartCtx.addToCart(props.prevProduct)}
                        >
                                Agregar al carrito
                        </Button>
                    </Col>
                </Row>
                
                
                <Button variant="danger" size="sm" className='close-btn' onClick={()=> props.setTrigger(false)}> X </Button>
                {props.Children}
            </div> 
        </div>
    )
    : "";

}

const popupStyles = {
    h6: {
        textTransform: 'capitalize'
    },
    span: {
        marginTop: '15px',
        fontWeight: 'bold'
    },
    p: {
        marginTop: '20px'
    },
    pb: {
        marginTop: '20px',
        fontWeight: 'bold'
    },
    button: {
        position: 'absolute',
        bottom: '36px',
        right: '18px'
    }

}

export default ProductPopup
