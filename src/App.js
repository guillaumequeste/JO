import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  
    render () {
        return (
            <div className="bodyApp">
                <div className="divApp">
                    <Link to="/summer" className="lienSummer">
                        <div className="divSummer">
                            <span className="linkAccueilSummer">Eté</span>
                        </div>
                    </Link>
                    <Link to="/winter" className="lienWinter">
                        <div className="divWinter">
                        <span className="linkAccueilWinter">Hiver</span>
                        </div>
                    </Link>
                    <Link to="/antiquity" className="lienAntiquity">
                        <div className="divAntiquite">
                        <span className="linkAccueilAntiquity">Antiquité</span>
                        </div>
                    </Link>
                    <div className="anneaux"></div>
                </div>
            </div>
        )
    }
}

export default App