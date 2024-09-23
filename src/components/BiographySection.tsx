import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import biographyImage from '../../public/img/FOTO-ANTICANON.png'

type Props = {};

const Biography = (props: Props) => {
  return (
    <div className="biographyContainer">
      <Row>
        <Col xs={6} className="artRow">
            <Image
                src={biographyImage}
                width={620}
                height={400}
            />
        </Col>
        <Col xs={6} className="d-flex flex-column gap-4 justify-content-center">
        <p className="h1">
            Conoce a Chiqui Vicioso
        </p>
        <p>
        Santo Domingo, 1948. Poeta, ensayista y dramaturga, licenciada en Sociología e Historia de América Latina de Brooklyn College,
         City University of New York;  Maestría en Educación, de  la Universidad de Columbia y estudios en Administración Cultural,
          de la Fundación Getulio Vargas, de Río de Janeiro.
        </p>
        <Button>
            Conoce mas
        </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Biography;
