import './App.css';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import React from 'react';
import apiCalls from '../../apiCalls';
import Footer from '../Footer/Footer';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const App = () => {
  const [articles, setArticles] = useState([]);

  // const getArticles = () => {
  //   apiCalls.getTopStories()
  // }
  
  useEffect(() => {
    apiCalls.getTopStories()
      .then(data => {
        console.log(data)
        setArticles(data.results.slice(0, 15))
      })
  }, [])

  return (
    <div>
      <Header />
      
      <Route exact path='/'>
        <ArticleList articles={articles} />
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
