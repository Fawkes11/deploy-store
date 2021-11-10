import React, { useContext } from 'react'
import CartContext from '../../modules/CartContext'
import {getCartItemsLS} from '../../modules/useCart'
function CartCounterIcon() {

    const CartCtx = useContext(CartContext)

    return (
        CartCtx.cart.length > 0 
        ?
        (<div style={countIcon.div}>
            <p
            style={countIcon.p}>
                {
                    CartCtx.cart.reduce(function (acc, item){
                        return acc + item.qty
                    },0)
                }
            </p>
        </div>)
        : ""
    )
}

const countIcon = {
    div: {
        margin: '0',
        padding: '0px 6px',
        position: 'absolute',
        right: '0',
        top: '0',
        backgroundColor: '#91491a',
        borderRadius: '20%',
    },
    p: {
        margin: '0',
        color: '#eadac0',
        fontWeight: 'bold',
    }
    
}


export default CartCounterIcon
