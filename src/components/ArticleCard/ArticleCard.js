import './ArticleCard.css'

const ArticleCard = ({ title, abstract }) => {
  return(
    <div className='article-card'>
       <h2>{title}</h2>
       <p>{abstract}</p>
    </div>
  )
}

export default ArticleCard;