import React, { Component } from 'react'
import Header from '../Header'
import './XIs.css'

class XIs extends Component {
  
    render () {
        return (
            <div className="bodyXIs">
                <Header />
                <img src={require("../../img/summer/XIe/stade_olympique.jpg")} alt="stade_olympique" className="img1XI"></img>
                <div className="infosXI">
                    <span className="title">1936</span>
                    <span className="title">Berlin, Allemagne</span>
                    <span className="details">1 - 16 août</span>
                    <span className="details">49 nations</span>
                    <span className="details">3 632 hommes</span>
                    <span className="details">331 femmes</span>
                    <span className="details">19 sports</span>
                    <span className="details">129 épreuves</span>
                </div>
                <div className="info1">
                    <p>Plus de 4000 athlètes de 49 pays participent aux Jeux d’été de Berlin avec une énorme mise en scène montrant au monde entier la force du régime Nazi.</p>
                    <p>L'athlète américain Jesse Owens remporte 4 médailles d'or aux Jeux olympiques de 1936, organisés par l'Allemagne nazie. Les médaillés du saut en longueur saluent depuis le podium aux Jeux olympiques d'été de Berlin, le 8 août 1936. De gauche à droite : le japonais Naoto Tajima (bronze) ; l’américain Jesse Owens (or) qui a établi un record olympique lors de l’événement et salué à la manière américaine avec la main sur le front ; et l’allemand Luz Long (argent) faisant le salut nazi.</p>
                </div>
                <div className="img2XI"></div>
            </div>
        )
    }
}

export default XIs