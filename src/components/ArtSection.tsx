import React, {useState} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import art1 from '../assets/img/content.jpeg'
import art2 from '../assets/img/chiqui-vicioso-antologicc81a.png'
import art3 from '../assets/img/513EWV8KRPL.jpg'
import art4 from '../assets/img/51PDWB0PR2L.jpg'
import { useNavigate } from "react-router-dom";
import ArtGroup from './ArtGroup';
import artData from '../data/arts.json'

type Props = {}

const Art = (props: Props) => {
    const [data] = useState(artData.slice(0, 4))
    const navigate = useNavigate();

  return (
    <div className='artContainer'>
        <p className='h2 text-light text'>
            Obras
        </p>
        <ArtGroup arts={data} light={true}/>
        <Button className='seeMoreArts' onClick={()=>navigate("/art")}>
            Ver más obras
        </Button>
        {/* <Row className='gx-5'>
            <Col className='d-flex flex-column align-items-center'>
                <Image src={art1} width={180} height={300}/>
                <p className='text-light text-center'>El teatro dominicano: una visión femenina o de género</p>
            </Col>
            <Col className='d-flex flex-column align-items-center'>
                <Image src={art2} width={180} height={300}/>
                <p className='text-light text-center'>El Teatro según Chiqui Vicioso. Antología</p>
            </Col>
            <Col className='d-flex flex-column align-items-center'>
                <Image src={art3} width={180} height={300}/>
                <p className='text-light text-center'>Whish-ky sour</p>
            </Col>
            <Col className='d-flex flex-column align-items-center'>
                <Image src={art4} width={180} height={300}/>
                <p className='text-light text-center'>Salome U. carta a una ausencia</p>
            </Col>
        </Row> */}
    </div>
  )
}

export default Art