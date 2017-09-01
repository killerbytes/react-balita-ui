import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1><Link to={`/`}>Balitang Probinsya</Link></h1>
        </div>
      </header>
    )
  }
}