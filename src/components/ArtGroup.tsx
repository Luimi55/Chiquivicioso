import React from 'react'
import Art from '../models/Art'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import ArtCard from './ArtCard';

type Props = {
    arts: Art[]
}

const ArtGroup = (props: Props) => {
  
  const {arts} = props

  return (
    <Row className='gx-5'>
      {arts.map((art, key) => {return (
        <ArtCard key={key} art={art}/>
      )})}
    </Row>
  )
}

export default ArtGroup