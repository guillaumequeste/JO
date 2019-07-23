import React, { Component } from 'react'
import Header from '../Header'
import './XXIs.css'

class XXIs extends Component {
  
    render () {
        return (
            <div className="bodyXXIs">
                <Header />
                <img src={require("../../img/summer/XXIe/stade.jpg")} alt="stade" className="img1"></img>
                <div className="infosXXI">
                    <span className="title">1976</span>
                    <span className="title">Montréal, Canada</span>
                    <span className="details">17 juillet - 1er août</span>
                    <span className="details">92 nations</span>
                    <span className="details">4 824 hommes</span>
                    <span className="details">1 260 femmes</span>
                    <span className="details">21 sports</span>
                    <span className="details">198 épreuves</span>
                </div>
                <div className="info1">
                    <p>Boycott de 32 pays africains à cause de la politique de l’Apartheid en Afrique du Sud.</p>
                    <p>En 1976, Nadia Comaneci est âgée de 14 ans pour sa première participation aux Jeux Olympiques de 1976 à Montréal. Elle survole littéralement le concours, reléguant ses adversaires au rang de faire-valoir jusqu’à décrocher la meilleure note possible, 10. Pour l’anecdote, le tableau d’affichage des scores n’avait pas été paramétré, aussi le score affiché de Nadia Comaneci est-il de … 1.0.</p>
                </div>
                <div className="img2XXI"></div>
                <div className="info2">
                    <p>Moment d’émotion pour les spectateurs canadiens, lors de la dernière journée de compétition, le Canadien Greg Joy décroche l’argent au saut en hauteur. L’athlète de 20 ans enthousiasmera la foule réunie au Stade en réalisant son exploit.</p>
                </div>
                <div className="img3XXI"></div>
            </div>
        )
    }
}

export default XXIs