import React, { Component } from 'react'
import Header from '../Header'
import './XXVIs.css'

class XXVIs extends Component {
  
    render () {
        return (
            <div className="bodyXXVIs">
                <Header />
                <img src={require("../../img/summer/XXVIe/stade_centenaire.jpg")} alt="stade_centenaire" className="img1"></img>
                <div className="infosXXVI">
                    <span className="title">1996</span>
                    <span className="title">Atlanta, Etats-Unis</span>
                    <span className="details">19 juillet - 4 août</span>
                    <span className="details">197 nations</span>
                    <span className="details">6 806 hommes</span>
                    <span className="details">3 512 femmes</span>
                    <span className="details">26 sports</span>
                    <span className="details">271 épreuves</span>
                </div>
                <div className="info1">
                    <p>Un attentat est perpétré dans le parc olympique : 2 morts et 111 blessés.</p>
                    <p>Malgré sa blessure, Kerri Strug remporte l’or pour les États-Unis aux Jeux d'Atlanta, en 1996. Son coach, Béla Karolyi, a porté l'athlète jusqu'au podium.</p>
                </div>
                <div className="img2XXVI"></div>
            </div>
        )
    }
}

export default XXVIs