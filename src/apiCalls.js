const apiCalls = {
  getTopStories() {
    const apiKey = process.env.REACT_APP_NYT_TECH_CX
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
      .then(res => res.json())
      .then(data => data)
  }
}

export default apiCalls;