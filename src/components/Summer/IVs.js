import React, { Component } from 'react'
import Header from '../Header'
import './IVs.css'

class IVs extends Component {
  
    render () {
        return (
            <div className="bodyIVs">
                <Header />
                <img src={require("../../img/summer/IVe/white_city.jpg")} alt="white_city" className="img1"></img>
                <div className="infosIV">
                    <span className="title">1908</span>
                    <span className="title">Londres, Royaume-Uni</span>
                    <span className="details">27 avril - 31 octobre</span>
                    <span className="details">22 nations</span>
                    <span className="details">1 971 hommes</span>
                    <span className="details">37 femmes</span>
                    <span className="details">22 sports</span>
                    <span className="details">110 épreuves</span>
                </div>
                <div className="info1">
                    <p>Attribués à Rome mais les fonds destinés aux Jeux furent utilisés pour réparer les dégâts de l’éruption du Vésuve en 1906. Pour la première fois, un stade fut spécialement aménagé pour les Jeux. Premier défilé d’athlètes derrière le drapeau de leur pays.</p>
                    <p>Le marathonien italien Dorando Pietri disqualifié après son arrivée.</p>
                </div>
                <div className="img2IV"></div>
                <div className="info2">
                    <p>Finale de tir à la corde, victoire de la City Police sur la Liverpool Police.</p>
                </div>
                <div className="img3IV"></div>
            </div>
        )
    }
}

export default IVs