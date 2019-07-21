import React, { Component } from 'react'
import Header from '../Header'
import './IVw.css'

class IVw extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <div className="bodyIVw">
                    <p className="textIVw">A venir...</p>
                </div>
            </div>
        )
    }
}

export default IVw