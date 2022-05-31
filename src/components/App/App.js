import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import React from 'react';
import apiCalls from '../../apiCalls';

const App = () => {
  const [articles, setArticles] = useState([]);

  // const getArticles = () => {
  //   apiCalls.getTopStories()
  // }
  
  useEffect(() => {
    apiCalls.getTopStories()
      .then(data => {
        console.log(data)
        setArticles(data.results.slice(0, 10))
      })
  }, [])

  return (
    <div>
      <Header />
      <ArticleList articles={articles} />
      
    </div>
  )
}

export default App;
