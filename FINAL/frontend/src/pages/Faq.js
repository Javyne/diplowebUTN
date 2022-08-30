import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import { faqs } from '../data/faqs';

export const Faq = () => {
  return (
    <>
      <Main>
        <ComoTrabajamos>
          <h2>Como Trabajamos</h2>
          <hr />
          <h4>Nos esforzamos por satisfacer las necesidades de nuestros clientes y brindarle un servicio rápido y oportuno.</h4>
          <ul>
            <li>
              <div>1</div>
              <h3>Diagnostico</h3>
              <p>Realizamos el diagnostico y presupuesto SIN CARGO dentro de las 48 hs.</p>
            </li>
            <li>
              <div>2</div>
              <h3>Repuestos</h3>
              <p>Una vez aprobado el presupuesto, se compran los repuestos y materiales de primera caldad.</p>
            </li>
            <li>
              <div>3</div>
              <h3>Reparación</h3>
              <p>Realizamos la reparación en nuestros talleres especializados, con las mejore normas de seguridad.</p>
            </li>
            <li>
              <div>4</div>
              <h3>Devolución</h3>
              <p>Devolvemos el equipo, reparado y funcional, con GARANTIA DE 90 DIAS.</p>
            </li>
          </ul>
        </ComoTrabajamos>
        <PFTit>Preguntas frecuentes</PFTit>
        <Preguntas>
          <div className="Divaccordion">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index} >
              <Accordion.Header>{faq.pregunta}</Accordion.Header>
              <Accordion.Body>
                <p>
                  {faq.respuesta}
               </p>
               </Accordion.Body>
            </Accordion.Item>
            ))}

          </Accordion>
          </div>
          <img alt="" src='../../images/it-1.jpg'/>
        </Preguntas>
      </Main>
    </>
  )
}

const Main = styled.div`
  width: 100%;
`

const ComoTrabajamos = styled.div`
  text-align: center;
  margin-top: 5%;

  hr{
    width: 10%;
    margin-left: 45%;
    color: var(--acento-oscuro);
    height: 2px;
    opacity: 1;
  }

  h4{
    color: grey;
    width: 30%;
    margin-left: 35%;
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }
    
  }

  h2, h3, div{
    font-weight: 900;
  }

  ul{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    list-style: none;
    margin-top: 5%;
    width: 80%;
    margin-left: 10%;
    
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }

    li{
      border-top: 2px solid var(--acento-claro);
      div{
        border: 2px solid var(--acento-claro);
        border-radius: 50%;
        position: relative;
        top: -22px;
        background-color: var(--claro);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p{
        color: grey;
        font-weight: 700;
      }
    }
  }


`

const PFTit = styled.h2`
  margin-left: 5%;
  font-weight: 900;
  margin-top: 5%;
`

const Preguntas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--oscuro);


  .Divaccordion{
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  img{
    width: 35%;
    border-radius: 10px;
    margin: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .accordion-item{
    border-color: var(--acento-claro);
  }




`

