import './ArticleCard.css'
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, abstract, id }) => {
  return(
    <Link to={`article/${id}`}>
      <article className='article-card'>
        <h2>{title}</h2>
        <p>{abstract}</p>
      </article>
    </Link>
  )
}

export default ArticleCard;