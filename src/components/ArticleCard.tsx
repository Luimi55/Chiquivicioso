import React from 'react'
import Article from '../models/Article'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

type Props = {
    article: Article
}

const ArticleCard = (props: Props) => {

    const {article} = props

  return (
            
    <Col xs={12} sm={4}
    //  className='border border-primary'  
     >
        <a 
            target="_blank" 
            style={{textDecoration:'none'}} 
            href={article.url}
        >
            <Image src={article.image} 
                width={350}
                height={300}
            />
            <p className='h5 text-dark'>{article.title}</p>
            <p className='text-dark'>{article.content}</p>
        </a>
    </Col>
  )
}

export default ArticleCard