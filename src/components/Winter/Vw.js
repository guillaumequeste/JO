import React, { Component } from 'react'
import Header from '../Header'
import './Vw.css'

class Vw extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <div className="bodyVw">
                    <p className="textVw">A venir...</p>
                </div>
            </div>
        )
    }
}

export default Vw