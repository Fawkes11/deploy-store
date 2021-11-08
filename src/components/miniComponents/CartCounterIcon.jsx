import React, { useEffect, useContext } from 'react'
import CartContext from '../../modules/CartContext'

function CartCounterIcon(props) {

    const CartCxt = useContext(CartContext)

    return (
        <div style={countIcon.div}><p style={countIcon.p}>{CartCxt.length}</p></div>
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
