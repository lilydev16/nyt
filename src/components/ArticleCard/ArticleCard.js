import './ArticleCard.css'

const ArticleCard = ({ title, abstract }) => {
  return(
    <article className='article-card'>
       <h2>{title}</h2>
       <p>{abstract}</p>
    </article>
  )
}

export default ArticleCard;