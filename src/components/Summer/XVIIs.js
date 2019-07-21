import React, { Component } from 'react'
import Header from '../Header'
import './XVIIs.css'

class XVIIs extends Component {
  
    render () {
        return (
            <div className="bodyXVIIs">
                <Header />
                <img src={require("../../img/summer/XVIIe/defile.jpg")} alt="defile" className="img1"></img>
                <div className="infos">
                    <span className="title">1960</span>
                    <span className="title">Rome, Italie</span>
                    <span className="details">25 août - 11 septembre</span>
                    <span className="details">83 nations</span>
                    <span className="details">4 727 hommes</span>
                    <span className="details">611 femmes</span>
                    <span className="details">17 sports</span>
                    <span className="details">150 épreuves</span>
                </div>
                <div className="info1">
                    <p>Les Jeux sont retransmis par plus de 100 chaînes de télévision en direct.</p>
                    <p>L'équipe olympique de Formose (Taïwan) proteste en 1960 contre le changement de nom que lui impose le Comité international olympique (CIO). Taïwan est contrainte d'abandonner le nom de République de Chine pour concourir aux Jeux olympiques de Rome, en 1960. La Chine communiste, quant à elle, est sortie du CIO et ne participera pas aux Jeux.</p>
                </div>
                <div className="img2XVII"></div>
                <div className="info2">
                    <p>À 18 ans, Cassius Clay remporte l’or olympique en boxe dans la catégorie poids mi-lourds en 1960. Cinq ans plus tard, il deviendra Mohamed Ali. Les médaillés olympiques en 1960 dans la catégorie poids mi-lourds sur le podium à Rome : Cassius Clay (au centre), or ; le polonais Zbigniew Pietrzykowski (à droite), argent ; Giulio Saraudi (Italie) et Anthony Madigan (Australie), médaille de bronze ex-æquo.</p>
                </div>
                <div className="img3XVII"></div>
                <div className="info3">
                    <p>L'éthiopien Abebe Bikila court la finale du marathon messieurs pieds nus en 1960, et gagne, devenant le premier Africain médaillé d'or olympique.</p>
                </div>
                <div className="img4XVII"></div>
            </div>
        )
    }
}

export default XVIIs