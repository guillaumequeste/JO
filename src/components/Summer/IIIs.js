import React, { Component } from 'react'
import Header from '../Header'
import './IIIs.css'

class IIIs extends Component {
  
    render () {
        return (
            <div className="bodyIIIs">
                <Header />
                <img src={require("../../img/summer/IIIe/club_house.jpg")} alt="club_house" className="img1"></img>
                <div className="infos">
                    <span className="title">1904</span>
                    <span className="title">Saint-Louis, Etats-Unis</span>
                    <span className="details">1er juillet - 23 novembre</span>
                    <span className="details">12 nations</span>
                    <span className="details">645 hommes</span>
                    <span className="details">6 femmes</span>
                    <span className="details">17 sports</span>
                    <span className="details">91 épreuves</span>
                </div>
                <div className="info1">
                    <p>Organisés également dans le cadre de l’Exposition Universelle sur une période de quatre mois. La plupart des athlètes étaient Américains excepté 42 athlètes venus d’autres nations.</p>
                    <p>Spectateurs des épreuves dans le Francis Field.</p>
                </div>
                <div className="img2III"></div>
                <div className="info2">
                    <p>Gymnaste à la barre fixe durant les Championnats des Turners.</p>
                </div>
                <div className="img3III"></div>
                <div className="info3">
                    <p>Un des levers de Perikles Kakousis.</p>
                </div>
                <div className="img4III"></div>
            </div>
        )
    }
}

export default IIIs