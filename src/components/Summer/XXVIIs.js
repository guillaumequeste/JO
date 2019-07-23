import React, { Component } from 'react'
import Header from '../Header'
import './XXVIIs.css'

class XXVIIs extends Component {
  
    render () {
        return (
            <div className="bodyXXVIIs">
                <Header />
                <img src={require("../../img/summer/XXVIIe/aquatic_centre.jpg")} alt="aquatic_centre" className="img1"></img>
                <div className="infosXXVII">
                    <span className="title">2000</span>
                    <span className="title">Sidney, Australie</span>
                    <span className="details">15 septembre - 1er octobre</span>
                    <span className="details">199 nations</span>
                    <span className="details">6 582 hommes</span>
                    <span className="details">4 069 femmes</span>
                    <span className="details">28 sports</span>
                    <span className="details">300 épreuves</span>
                </div>
                <div className="info1">
                    <p>Premiers tests de dépistage de l’EPO, premiers prélèvements de sang.</p>
                    <p>La Corée du Sud et la Corée du Nord marchent sous un seul drapeau, en 2000. Les porteurs de drapeau Eun-Soon Chung et Jang-Choo Pak mènent l’équipe olympique coréenne, issue du Nord et du Sud, dans un geste de réconciliation, durant la cérémonie d’ouverture des Jeux olympiques de Sydney en 2000.</p>
                </div>
                <div className="img2XXVII"></div>
                <div className="info2">
                    <p>En 2000, l’équatoguinéen Éric Moussambani participe seul pour la première fois dans une piscine de taille olympique. Après que tous les autres compétiteurs de sa série ont été disqualifiés en raison de faux départs, Moussambani a effectué le 100 m nage libre messieurs aux Jeux olympiques de Sydney en 2000. Il a terminé en 1 m 52 s 72, plus d’une minute de plus que le record mondial. C'était la première fois qu'il nageait dans une piscine à la taille réglementaire.</p>
                </div>
                <div className="img3XXVII"></div>
            </div>
        )
    }
}

export default XXVIIs