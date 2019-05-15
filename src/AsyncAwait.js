import React, { Component } from 'react'
// эта библиотека мне давно нравится куда больше, чем fetch
import axios from 'axios'

class AsyncAwait extends Component {
  state = {
    fetchData: null,
    axiosData: null,
    films: null,
    species: null
  }

  async componentDidMount () {
    const peopleURL = 'https://swapi.co/api/people/'
    const planetsURL = 'https://swapi.co/api/planets/'

    const axiosResponse = await axios(planetsURL)
    console.log(axiosResponse.data)
    this.setState({ axiosData: axiosResponse.data })

    const fetchResponse = await fetch(peopleURL)
    const fetchJSON = await fetchResponse.json()
    console.log(fetchJSON)
    this.setState({ fetchData: fetchJSON })

    // сразу несколько
    const filmsURL = 'https://swapi.co/api/films/'
    const speciesURL = 'https://swapi.co/api/species/'

    const filmsPromise = axios(filmsURL)
    const speciesPromise = axios(speciesURL)

    const [films, species] = await Promise.all([filmsPromise, speciesPromise])

    console.log(films, species)

    this.setState({ films: films.data, species: species.data })
  }

  render () {
    const { fetchData, axiosData, films, species } = this.state
    return (
      <div>
        <h1>Using Star Wars API, Async/Await (newer) way</h1>
        {/* если есть fetch данные - рендерим с ними параграф */}
        {fetchData && <p>Fetch data: {fetchData.count} people</p>}
        {/* если есть axios данные - рендерим с ними параграф */}
        {axiosData && <p>Axios data: {axiosData.count} planets</p>}

        {films && <p>Films: {films.count}</p>}
        {species && <p>Species: {species.count}</p>}
      </div>
    )
  }
}

export default AsyncAwait
