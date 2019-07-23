import React, { Component } from 'react'
import Header from '../Header'
import './XVs.css'

class XVs extends Component {
  
    render () {
        return (
            <div className="bodyXVs">
                <Header />
                <img src={require("../../img/summer/XVe/ceremonie.jpg")} alt="ceremonie" className="img1"></img>
                <div className="infosXV">
                    <span className="title">1952</span>
                    <span className="title">Helsinki, Finlande</span>
                    <span className="details">19 juillet - 3 août</span>
                    <span className="details">69 nations</span>
                    <span className="details">4 436 hommes</span>
                    <span className="details">519 femmes</span>
                    <span className="details">17 sports</span>
                    <span className="details">149 épreuves</span>
                </div>
                <div className="info1">
                    <p>L’Union soviétique et Israël participent pour la première fois aux Jeux. Après des années d’absence, l’Allemagne et le Japon retrouvent les Jeux olympiques.</p>
                    <p>Marjorie Jackson éblouit avec un doublé du sprint.</p>
                </div>
                <div className="img2XV"></div>
                <div className="info2">
                    <p>Emil Zatopek remporte le 5 000m, le 10 000m et le marathon.</p>
                </div>
                <div className="img3XV"></div>
            </div>
        )
    }
}

export default XVs