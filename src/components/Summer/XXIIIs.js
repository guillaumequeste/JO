import React, { Component } from 'react'
import Header from '../Header'
import './XXIIIs.css'

class XXIIIs extends Component {
  
    render () {
        return (
            <div className="bodyXXIIIs">
                <Header />
                <img src={require("../../img/summer/XXIIIe/inglewood.jpg")} alt="inglewood" className="img1"></img>
                <div className="infos">
                    <span className="title">1984</span>
                    <span className="title">Los Angeles, Etats-Unis</span>
                    <span className="details">28 juillet - 12 août</span>
                    <span className="details">140 nations</span>
                    <span className="details">5 263 hommes</span>
                    <span className="details">1 566 femmes</span>
                    <span className="details">21 sports</span>
                    <span className="details">221 épreuves</span>
                </div>
                <div className="info1">
                    <p>Les Jeux sont boycottés par l’URSS et 14 nations du Pacte de Varsovie.</p>
                    <p>Arrivée du 400m.</p>
                </div>
                <div className="img2XXIII"></div>
            </div>
        )
    }
}

export default XXIIIs