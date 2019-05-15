import React, { Component } from 'react'

class Usual extends Component {
  state = {
    fetchData: null,
    axiosData: null
  }

  componentDidMount () {
    const peopleURL = 'https://swapi.co/api/people/'
    const planetsURL = 'https://swapi.co/api/planets/'

    fetch(peopleURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
  }

  render () {
    return <div>Inside Usual component</div>
  }
}

export default Usual
