import React, { Component } from 'react'
import Header from '../Header'
import './VIw.css'

class VIw extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <div className="bodyVIw">
                    <p className="textVIw">A venir...</p>
                </div>
            </div>
        )
    }
}

export default VIw