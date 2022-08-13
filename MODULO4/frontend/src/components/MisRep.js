import { useState } from 'react'
import styled from 'styled-components';
import { TablaRep } from './TablaRep';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { dataReparaciones } from '../helpers';

//* PAGINA PARA VER LAS REPARACIONES DEL CLIENTE SE CONECTA A LA API*//

export const MisRep = () => {

    //*STATES PARA DATA Y SPAN
    const [data, setData] = useState([]);
    const [hidden, setHidden] = useState(true);

    const resetState = (e) =>{
      setData([]);
      e.target[0].value = "";
      e.target[1].value = "";
    }


    const checkData = ( e ) => {
      e.preventDefault();
      let cliente_id = parseInt(e.target[0].value);
      let reparaciones = dataReparaciones(cliente_id);
      console.log(reparaciones)
      
      if(reparaciones.length > 0) {
        setData(reparaciones);
        setHidden(true);     
      }
      else
      {
        resetState(e);
        setHidden(false);  
      }
    }

  return (
    <Main>
      <Container>
        <Form onSubmit={checkData} >
          <Row>
            <Col sm={2} >
              <Form.Group controlId="usuario">
                <Form.Control type="text" placeholder="Nro Cliente"/>
              </Form.Group>
            </Col>
            <Col sm={2} >
              <Boton variant="primary" type="submit">
                Ver mis reparaciones
              </Boton>
            </Col>
          </Row>
          <Span hidden={hidden}>Cliente incorrecto</Span>
        </Form>
      </Container>
      <div className="tabla">
        <TablaRep dataCliente={data} />
      </div>
      
    </Main>

  )
}

const Main = styled.div`
  margin-top: 50px;

  .tabla{
    margin-top: 50px;
  }
`
const Boton = styled(Button)`
  background-color: var(--main);
  border: none;

  &hover{
    filter: brightness(110%);
  }

`
const Span = styled.span`
  color: var(--danger);
`
