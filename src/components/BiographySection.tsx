import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import biographyImage from '/img/FOTO-ANTICANON.png'

type Props = {};

const Biography = (props: Props) => {

  const navigate = useNavigate();

  return (
    <div className="biographyContainer">
      <Row>
        <Col xs={12} sm={6} className="artRow">
            <Image
                src={biographyImage}
                // width={620}
                // height={400}
                fluid
            />
        </Col>
        <Col xs={12} sm={6} className="d-flex flex-column gap-4 justify-content-center">
        <p className="animated-text">
          <span></span> Chiqui Vicioso 
        </p>
        <p>
        Santo Domingo, 1948. Poeta, ensayista y dramaturga, licenciada en Sociología e Historia de América Latina de Brooklyn College,
         City University of New York;  Maestría en Educación, de  la Universidad de Columbia y estudios en Administración Cultural,
          de la Fundación Getulio Vargas, de Río de Janeiro. 
        </p>
        <Button className="btn btn-danger" onClick={()=>navigate("/biography")}>
            Leer más
        </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Biography;
