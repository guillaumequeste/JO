import React, { Component } from 'react'
import Header from '../Header'
import './XXVs.css'

class XXVs extends Component {
  
    render () {
        return (
            <div className="bodyXXVs">
                <Header />
                <img src={require("../../img/summer/XXVe/picornell.jpg")} alt="picornell" className="img1"></img>
                <div className="infosXXV">
                    <span className="title">1992</span>
                    <span className="title">Barcelone, Espagne</span>
                    <span className="details">25 juillet - 9 août</span>
                    <span className="details">169 nations</span>
                    <span className="details">6 652 hommes</span>
                    <span className="details">2 704 femmes</span>
                    <span className="details">25 sports</span>
                    <span className="details">257 épreuves</span>
                </div>
                <div className="info1">
                    <p>Participation de Cuba, de la Corée du Nord et de l’Afrique du Sud après de nombreuses années d’absence. L’Allemagne est réunifiée et les 12 nations formant l’ancienne URSS participent sous le nom de l’équipe unifiée.</p>
                    <p>Le père du britannique Derek Redmond l’aide à franchir la ligne d’arrivée en 1992. Le britannique Derek Redmond grimace de douleur tandis que son père l'aide à franchir la ligne d'arrivée du stade olympique de Barcelone, le 3 août 1992. Foudroyé par un claquage lors de son 400 m, l'athlète a tenu à terminer la course, sous les applaudissements du public.</p>
                </div>
                <div className="img2XXV"></div>
                <div className="info2">
                    <p>La «dream team» américaine remporte l'or en basket aux Jeux de 1992. De gauche à droite : Larry Bird, Scottie Pippen, Michael Jordan, Clyde Drexler et Karl Malone se tiennent victorieux devant le drapeau américain après avoir remporté la finale à Barcelone le 8 août 1992.</p>
                </div>
                <div className="img3XXV"></div>
            </div>
        )
    }
}

export default XXVs