import './ArticleList.css'
import ArticleCard from '../ArticleCard/ArticleCard'


const ArticleList = ({ articles }) => {
  const articleCards = articles.map((article, index) => {
    return (
      <ArticleCard 
        key={index}
        id={index}
        title={article.title}
        abstract={article.abstract}
      />
    )
  })
  return (
    <div className='article-list'>
      {articleCards}
    </div>
  )
}

export default ArticleList;