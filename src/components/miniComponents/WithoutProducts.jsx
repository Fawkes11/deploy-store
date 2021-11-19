import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function WithoutProducts() {
    return (
        <div className="sinItems">
            <p>Aún no Agrega elementos al carrito!</p>
            <Link to="/Menu">
              <Button variant="success">Ir al carrito</Button>
            </Link>
          </div>
    )
}

export default WithoutProducts
