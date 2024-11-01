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
      {arts.sort((a,b)=>{
          let date1 : Date = new Date(a.date); 
          let date2 : Date = new Date(b.date); 
          if(date1.getTime() > date2.getTime()){
            return 1;
          }

          if(date1.getTime() < date2.getTime()){
            return -1;
          }
        
        return 0;
      }).map((art, key) => {return (
        <ArtCard key={key} art={art} light={light}/>
      )})}
    </Row>
  )
}

export default ArtGroup