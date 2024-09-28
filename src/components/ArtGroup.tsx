import React from 'react'
import Art from '../models/Art'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import ArtCard from './ArtCard';

type Props = {
    arts: Art[],
    light: boolean,
    classname?: string
}

const ArtGroup = (props: Props) => {
  
  const {arts, light,classname} = props

  return (
    <Row className={`gx-5 ${classname}`}>
      {arts.map((art, key) => {return (
        <ArtCard key={key} art={art} light={light}/>
      )})}
    </Row>
  )
}

export default ArtGroup