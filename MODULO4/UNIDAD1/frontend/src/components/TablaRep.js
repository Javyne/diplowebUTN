import { Container, Table } from 'react-bootstrap';

export const TablaRep = ({dataCliente}) => {

  return (
    <>
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Fecha Rep.</th>
                <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {dataCliente.map((item, index) => 
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.equipo}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.fecha}</td>
                        <td>{item.estado}</td>
                    </tr>
                    )}
            </tbody>
        </Table>
    </Container>
    
    </>
  )
}
