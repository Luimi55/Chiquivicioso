import Multimedia from '../models/Multimedia'
import Row from "react-bootstrap/Row";
import MultimediaCard from './MultimediaCard';

type Props = {
    multimedias: Multimedia[],
    classname?: string
}

const MultimediaGroup = (props: Props) => {
  
  const {multimedias,classname} = props

  return (
    <Row className={`gx-5 ${classname}`}>
      {multimedias.map((multimedia, key) => {return (
        <MultimediaCard key={key} multimedia={multimedia}/>
      )})}
    </Row>
  )
}

export default MultimediaGroup