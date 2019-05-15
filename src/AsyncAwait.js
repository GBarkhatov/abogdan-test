import React, { Component } from 'react'
// эта библиотека мне давно нравится куда больше, чем fetch
import axios from 'axios'

class AsyncAwait extends Component {
  state = {
    // используем null по дефолту как хорошую практику
    fetchData: null,
    axiosData: null
  }

  componentDidMount () {
    const peopleURL = 'https://swapi.co/api/people/'
    const planetsURL = 'https://swapi.co/api/planets/'

    axios(planetsURL).then(response => {
      // у axios response уже сразу имеет "data" и не надо писать .json()
      // вывожу данные в консоль, чтобы ты мог посмотреть, что еще ты можешь использовать (если интересно)
      console.log('axios data:', response.data)
      // использую setState, чтобы компоненты рендерились
      this.setState({ axiosData: response.data })
    })

    // fetch встроен в большинство современных браузеров
    fetch(peopleURL)
      // нужно респонс сконвертировать в json и передать дальше
      .then(response => response.json())
      .then(data => {
        // вывожу данные в консоль, чтобы ты мог посмотреть, что еще ты можешь использовать (если интересно)
        console.log('fetch data:', data)
        // использую setState, чтобы компоненты рендерились
        this.setState({ fetchData: data })
      })
      .catch(error => console.error(error))
  }

  render () {
    //  выуживаем фетч и аксиос данные из state и засовываем их в отдельные переменные для удобства
    const { fetchData, axiosData } = this.state
    return (
      <div>
        <h1>Using Star Wars API, Async/Await (newer) way</h1>
        {/* если есть fetch данные - рендерим с ними параграф */}
        {fetchData && <p>Fetch data: {fetchData.count} people</p>}
        {/* если есть axios данные - рендерим с ними параграф */}
        {axiosData && <p>Axios data: {axiosData.count} planets</p>}
      </div>
    )
  }
}

export default AsyncAwait
