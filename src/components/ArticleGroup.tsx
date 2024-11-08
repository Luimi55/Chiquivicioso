import Article from '../models/Article'
import Row from 'react-bootstrap/Row'
import ArticleCard from './ArticleCard'

type Props = {
    articles: Article[],
    classname?: string
}

const ArticleGroup = (props: Props) => {

    const {articles, classname} = props

  return (
    <Row className={`gx-5 ${classname}`}>
      {articles.sort((a,b)=>{
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
        <ArticleCard key={key} article={art}/>
      )})}
    </Row>
  )
}

export default ArticleGroup