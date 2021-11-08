import React, { useEffect } from 'react'
import { getCartItems } from '../../modules/cart'

function CartCounterIcon(props) {

    return (
        <div style={countIcon.div}><p style={countIcon.p}>{getCartItems().length}</p></div>
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
