import React, { Component } from 'react'
import Header from '../Header'
import './XXIVs.css'

class XXIVs extends Component {
  
    render () {
        return (
            <div className="bodyXXIVs">
                <Header />
                <img src={require("../../img/summer/XXIVe/seoul.jpg")} alt="seoul" className="img1"></img>
                <div className="infos">
                    <span className="title">1988</span>
                    <span className="title">Séoul, Corée du Sud</span>
                    <span className="details">17 septembre - 2 octobre</span>
                    <span className="details">160 nations</span>
                    <span className="details">6 197 hommes</span>
                    <span className="details">2 194 femmes</span>
                    <span className="details">23 sports</span>
                    <span className="details">237 épreuves</span>
                </div>
                <div className="info1">
                    <p>Boycott de 7 pays en faveur de la Corée du Nord. Affaire Ben Johnson, disqualifié pour dopage sur 100m.</p>
                    <p>Une entrée à haut risque aux Jeux olympiques de Séoul en 1988. Un cascadeur entre en parachute dans le stade olympique durant la cérémonie d'ouverture.</p>
                </div>
                <div className="img2XXIV"></div>
            </div>
        )
    }
}

export default XXIVs