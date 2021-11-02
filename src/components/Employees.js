import React, {useState, useEffect} from 'react'
import EmployeeCard from './Cards/EmployeeCard'
import {Container, Row, Col} from 'react-bootstrap'




 const Employees = () => {

    const [empleados, setEmpleados] = useState([])

    useEffect(() => {
        llamadoEmpleados();
    },[])

    const llamadoEmpleados = async() => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/Fawkes11/FAKE_API_services/empleados');
            const data = await res.json();
            setEmpleados(data);
          } catch (error) {
            console.log(error);
          }
    }

    return(

        <Container fluid className="contEmployeesCard">
            <Row>
                {
                    empleados.map((empleado) => {
                        return(
                            <Col key={empleado.id}>
                                <EmployeeCard
                                photo={empleado.photo}
                                name={empleado.name}
                                position={empleado.cargo}
                                />
                            </Col> 
                        )
                    })
                }             
            </Row>
            
        </Container>

    )
    
}

export default Employees