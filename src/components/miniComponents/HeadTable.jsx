import React from 'react'

function HeadTable() {
    return (
        <thead>
            <tr>
            <td className="hidden-xs">Image</td>
            <td>Product Name</td>
            <td>Size</td>
            <td className="td-qty">Quantity</td>
            <td>Unit Price</td>
            <td> Sub Total</td>
            <td>Remove</td>
            </tr>
        </thead>
    )
}

export default HeadTable
