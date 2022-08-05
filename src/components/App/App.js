import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import apiCalls from '../../apiCalls';
import Footer from '../Footer/Footer';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import Form from '../Form/Form';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFilter, setFilter] = useState(false)
  const [error, setError] = useState('')
  const [today, setToday] = useState('');

  const filterArticles = (filterBy) => {
    const filtered = articles.filter(article => {
      return article.section.toLowerCase() === filterBy.toLowerCase() || article.title.toLowerCase().includes(filterBy.toLowerCase())
    })
    setFilteredResults(filtered)
    setFilter(true)
  }

  const toggleFilter = () => {
    isFilter ? setFilter(false) : setFilter(true)
  }
  
  useEffect(() => {
    apiCalls.getTopStories()
    .then(data => {
        if (data.status === 'OK') {
          setArticles(data.results)
          setToday(new Date().toDateString())
        } else {
          setError('Something went wrong and our team is working on the issue')
        }
      })
      .catch(err => setError('Something went wrong and our team is working on the issue'))
  }, [])

  return (
    error.length ? <p className='error'>{error}</p> : (
      <div className='app-container'>
        <Header today={today} />
        
        <Route exact path='/'>
          <Form 
            filterArticles={filterArticles}
            toggleFilter={toggleFilter}
            isFilter={isFilter}
          />
          <ArticleList 
            articles={articles} 
            filteredResults={filteredResults}
            isFilter={isFilter} 
          />
        </Route>

        <Route 
          exact path='/article/:id' 
          render={({ match }) => {
            return (
              <ArticleDetail 
                id={match.params.id}
                articles={articles}
              />
            )
          }}
        />

        <Footer />
      </div>
    )
  )
}

export default App;
