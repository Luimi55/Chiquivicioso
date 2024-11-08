import {useState} from 'react'
import articuleData from '../data/articles.json'
import ArticleGroup from './ArticleGroup'
import Button from 'react-bootstrap/Button';



const Articles = () => {
  const [data] = useState(articuleData.slice(0, 3))

  return (
    <div className='articleContainer'>
      <p className='h2 text-danger mb-4'>
        Artículos
      </p>
      <ArticleGroup classname='mb-4' articles={data}/>
      <Button className='btn btn-danger'>Ver más artículos</Button>
    </div>
  )
}

export default Articles