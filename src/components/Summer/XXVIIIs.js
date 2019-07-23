import React, { Component } from 'react'
import Header from '../Header'
import './XXVIIIs.css'

class XXVIIIs extends Component {
  
    render () {
        return (
            <div className="bodyXXVIIIs">
                <Header />
                <img src={require("../../img/summer/XXVIIIe/renove.jpg")} alt="renove" className="img1"></img>
                <div className="infosXXVIII">
                    <span className="title">2004</span>
                    <span className="title">Athènes, Grèce</span>
                    <span className="details">13 - 29 août</span>
                    <span className="details">201 nations</span>
                    <span className="details">6 296 hommes</span>
                    <span className="details">4 329 femmes</span>
                    <span className="details">28 sports</span>
                    <span className="details">301 épreuves</span>
                </div>
                <div className="info1">
                    <p>Les compétitions de tir à l’arc et les arrivées des marathons eurent lieu dans le stade historique de marbre, le Stade panathénaïque, tandis que le poids hommes et femmes eurent pour cadre prestigieux le site d’Olympie.</p>
                    <p>En pleine course, le brésilien Vanderlei de Lima est entraîné dans la foule par un ancien prêtre irlandais, en 2004. Le brésilien a été attaqué par un spectateur dans les derniers kilomètres du marathon, le 29 août 2004. De Lima, annoncé favori pour l’or, perd vingt secondes mais termine tout de même à la troisième place.</p>
                </div>
                <div className="img2XXVIII"></div>
            </div>
        )
    }
}

export default XXVIIIs