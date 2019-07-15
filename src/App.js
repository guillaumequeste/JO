import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  
    render () {
        return (
            <div className="bodyApp">
                <div className="divApp">
                    <div className="divSummer">
                        <Link to="/summer" className="lienSummer"><img src={require("./img/summer.jpg")} alt="summer"/></Link>
                    </div>
                    <div className="divWinter">
                        <Link to="/winter" className="lienWinter"><img src={require("./img/winter.jpg")} alt="winter"/></Link>
                    </div>
                    <div className="divAntiquite">
                        <Link to="/antiquite" className="lienAntiquite"><img src={require("./img/summer.jpg")} alt="antiquite"/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default App