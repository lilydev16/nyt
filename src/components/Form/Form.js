import './Form.css';
import { useState } from 'react';

const Form = ({ filterArticles }) => {
  const [search, setSearch] = useState('')

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    filterArticles(search)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* <label htmlFor='search'>Search</label> */}
      <input
        value={search}
        type='text'
        placeholder='America'
        // id='search'
        name='search'
        className='search-bar'
        onChange={(e) => updateSearch(e)}
      >
      </input>
      <button
        type='submit'
        className='search-btn'
        disabled={search.length ? false : true}
      >Search
      </button>
    </form>
  )
}

export default Form;