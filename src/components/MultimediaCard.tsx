import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Multimedia from '../models/Multimedia';

type Props = {
  multimedia: Multimedia
}

const MultimediaCard = (props: Props) => {
  const {multimedia} = props
  return (
    <Col xs={6} sm={3}>
      <a 
        className='d-flex flex-column align-items-center mb-4' 
        target="_blank" 
        style={{textDecoration:'none'}} 
        href={multimedia.image}
      >
        <Image src={multimedia.image} width={300} height={300}/>
      </a>
    </Col>
  )
}

export default MultimediaCard