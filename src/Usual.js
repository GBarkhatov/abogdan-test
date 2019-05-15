import React, { Component } from 'react'

class Usual extends Component {
  state = {
    // используем null по дефолту как хорошую практику
    fetchData: null,
    axiosData: null
  }

  componentDidMount () {
    const peopleURL = 'https://swapi.co/api/people/'
    const planetsURL = 'https://swapi.co/api/planets/'

    // fetch встроен в большинство современных браузеров
    fetch(peopleURL)
      // нужно респонс сконвертировать в json и передать дальше
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
  }

  render () {
    //  выуживаем фетч и аксиос данные из state и засовываем их в отдельные переменные для удобства
    const { fetchData, axiosData } = this.state
    return (
      <div>
        {/* если есть fetch данные - рендерим с ними параграф */}
        {fetchData && <p>Fetch data: {fetchData.count}</p>}
        {/* если есть axios данные - рендерим с ними параграф */}
        {axiosData && <p>Axios data: {axiosData.count}</p>}
      </div>
    )
  }
}

export default Usual
