import React from 'react'
import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Art from '../models/Art';

type Props = {
  art: Art
}

const ArtCard = (props: Props) => {

  const {art} = props

  return (
    <Col className='d-flex flex-column align-items-center'>
      <Image src={art.imagePath} width={180} height={300}/>
      <p className='text-light text-center'>{art.caption}</p>
    </Col>
  )
}

export default ArtCard