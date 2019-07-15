import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  
    render () {
        return (
            <div className="bodyApp">
                <div className="divApp">
                    <div className="divSummer">
                        <Link to="/summer" className="lienSummer">Summer</Link>
                    </div>
                    <div className="divWinter">
                        <Link to="/winter" className="lienWinter">Winter</Link>
                    </div>
                    <div className="divAntiquite">
                        <Link to="/antiquity" className="lienAntiquity">Antiquity</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default App