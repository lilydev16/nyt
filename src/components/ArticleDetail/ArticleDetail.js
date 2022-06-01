import './ArticleDetail.css';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ selectedArticle }) => {
  const { title, abstract, byline, multimedia, section, subsection, short_url, updated_date } = selectedArticle
  

  return(
    <div className='details-viewpage'>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
      <div className='article-details'>
        <img src={multimedia[1].url} alt={multimedia[1].caption} />
        <h1>{title}</h1>
        <p>{abstract}</p>
        <a className='article-link' href={short_url} target='_blank'>Read More...</a>
        <p>{byline}</p>
        <p>{updated_date}</p>
        <p>{section} {subsection}</p>
      </div>
    </div>
  )
}

export default ArticleDetail;