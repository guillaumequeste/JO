import React, { Component } from 'react'
import Header from '../Header'
import './XXXIs.css'

class XXXIs extends Component {
  
    render () {
        return (
            <div className="bodyXXXIs">
                <Header />
                <img src={require("../../img/summer/XXXIe/ouverture.jpg")} alt="ouverture" className="img1"></img>
                <div className="infos">
                    <span className="title">2016</span>
                    <span className="title">Rio de Janeiro, Brésil</span>
                    <span className="details">5 - 21 août</span>
                    <span className="details">206 nations</span>
                    <span className="details">11 402 participants</span>
                    <span className="details">28 sports</span>
                    <span className="details">306 épreuves</span>
                </div>
                <div className="info1">
                    <p>Le jamaïcain Usain Bolt renforce sa position d’homme le plus rapide du monde en 2016. Le jamaïcain Usain Bolt participe à la demi-finale du 100 m messieurs, le 9e jour des Jeux olympiques de Rio, le 14 août 2016. Bolt est rentré chez lui avec sa troisième médaille d’or consécutive.</p>
                </div>
                <div className="img2XXXI"></div>
            </div>
        )
    }
}

export default XXXIs