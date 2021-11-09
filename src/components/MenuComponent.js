import React, {useState, useEffect} from 'react'
import ProductCard from './Cards/ProductCard'
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../styles/MenuComponent.css'

const MenuComponent = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async() => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/Fawkes11/FAKE_API_services/menu');
            const data = await res.json();
            setProductos(data);
          } catch (error) {
            console.log(error);
          }
    }
    return (
        <Container fluid className="menuComponentContainer p-5">
            <Row style={{paddingLeft: '150px', paddingRight: '150px'}}>
                <Col style={{display: 'flex', justifyContent:'center'}}>
                    <h2>Menú</h2>
                </Col>
                <Col style={{display: 'flex', justifyContent:'center'}}>
                    <Button className='productCardButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                        Descargar
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                {
                    productos.map((pro) => {
                        return(
                            <Col className='cElementsMenu' key={pro.id}>

                                <ProductCard
                                id={pro.id}
                                photo={pro.imagen}
                                name={pro.product}
                                type={pro.type}
                                size={pro.tamaño}
                                price={pro.precio}
                                ingredientes={pro.ingredientes}
                                />

                            </Col> 
                        )
                    })
                }             
            </Row>
        </Container>
    )
}

export default MenuComponent;
