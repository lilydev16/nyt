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

  const filterArticles = (filterBy) => {
    console.log(filterBy)
    const filtered = articles.filter(article => {
      return article.section.toLowerCase() === filterBy.toLowerCase() || article.title.toLowerCase().includes(filterBy.toLowerCase())
    })
    setFilteredResults(filtered)
    setFilter(true)
  }
  
  useEffect(() => {
    apiCalls.getTopStories()
      .then(data => {
        // console.log(data)
        setArticles(data.results.slice(0, 15))
      })
  }, [])

  return (
    <div>
      <Header />
      
      <Route exact path='/'>
        <Form filterArticles={filterArticles} />
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
              selectedArticle={articles[parseInt(match.params.id)]}
            />
          )
        }}
      />

      <Footer />
    </div>
  )
}

export default App;
