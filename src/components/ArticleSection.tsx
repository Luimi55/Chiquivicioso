import React, {useState} from 'react'
import articuleData from '../data/articles.json'
import ArticleGroup from './ArticleGroup'
import Button from 'react-bootstrap/Button';


type Props = {}

const Articles = (props: Props) => {
  const [data] = useState(articuleData.slice(0, 3))

  return (
    <div className='articleContainer'>
      <p className='h2 text-danger mb-5'>
        Artículos
      </p>
      <ArticleGroup articles={data}/>
      <Button>Ver más artículos</Button>
    </div>
  )
}

export default Articles