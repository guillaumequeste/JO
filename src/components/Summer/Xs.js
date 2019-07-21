import React, { Component } from 'react'
import Header from '../Header'
import './Xs.css'

class Xs extends Component {
  
    render () {
        return (
            <div className="bodyXs">
                <Header />
                <img src={require("../../img/summer/Xe/ceremonie.jpg")} alt="ceremonie" className="img1"></img>
                <div className="infos">
                    <span className="title">1932</span>
                    <span className="title">Los Angeles, Etats-Unis</span>
                    <span className="details">30 juillet - 14 août</span>
                    <span className="details">37 nations</span>
                    <span className="details">1 206 hommes</span>
                    <span className="details">126 femmes</span>
                    <span className="details">14 sports</span>
                    <span className="details">117 épreuves</span>
                </div>
                <div className="info1">
                    <p>Introduction du chronométrage automatique au centième de seconde ainsi que du film d’arrivée. Utilisation des hymnes nationaux.</p>
                    <p>Le village olympique des JO de 1932, à Los Angeles.</p>
                </div>
                <div className="img2X"></div>
            </div>
        )
    }
}

export default Xs