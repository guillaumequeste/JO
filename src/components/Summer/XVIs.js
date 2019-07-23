import React, { Component } from 'react'
import Header from '../Header'
import './XVIs.css'

class XVIs extends Component {
  
    render () {
        return (
            <div className="bodyXVIs">
                <Header />
                <img src={require("../../img/summer/XVIe/ceremonie.jpg")} alt="ceremonie" className="img1"></img>
                <div className="infosXVI">
                    <span className="title">1956</span>
                    <span className="title">Melbourne, Australie</span>
                    <span className="details">22 novembre - 9 décembre</span>
                    <span className="details">72 nations</span>
                    <span className="details">2 938 hommes</span>
                    <span className="details">376 femmes</span>
                    <span className="details">17 sports</span>
                    <span className="details">145 épreuves</span>
                </div>
                <div className="info1">
                    <p>Boycott de l’Espagne, des Pays-Bas et de la Suisse (invasion soviétique en Hongrie), et de l’Égypte, du Liban, de l’Irak et la Chine (Formose et Canal de Suez). Les épreuves d’équitation ont lieu à Stockholm (Suède).</p>
                    <p>Les JO d'été se déroulent enfin dans l'hémisphère sud, une occasion de s'éloigner un peu du rideau de fer et de ses tensions, tout en soulignant la dimension universelle de la grande famille des anneaux. Peine perdue, ces Olympiades seront les premières marquées par le sceau du boycott. Avec en victime principale un football, déjà pas franchement verni dans ce petit monde de l'amateurisme, qui passe définitivement aux mains du camp de l'Est.</p>
                </div>
                <div className="img2XVI"></div>
            </div>
        )
    }
}

export default XVIs