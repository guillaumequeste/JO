import React, { Component } from 'react'
import Header from '../Header'
import './IIs.css'

class IIs extends Component {
  
    render () {
        return (
            <div className="bodyIIs">
                <Header />
                <img src={require("../../img/summer/IIe/velodrome_vincennes.jpg")} alt="velodrome_vincennes" className="img1"></img>
                <div className="infos">
                    <span className="title">1900</span>
                    <span className="title">Paris, France</span>
                    <span className="details">14 mai - 28 octobre</span>
                    <span className="details">24 nations</span>
                    <span className="details">975 hommes</span>
                    <span className="details">22 femmes</span>
                    <span className="details">18 sports</span>
                    <span className="details">95 épreuves</span>
                </div>
                <div className="info1">
                    <p>Des exercices de gymnastique prennent le statut olympique, elles sont organisées dans le cadre de l’Exposition Universelle sur une période de cinq mois.</p>
                    <p>Barrières en bois de la course du 110 mètres haies.</p>
                </div>
                <div className="img2II"></div>
                <div className="info2">
                    <p>Le départ du marathon.</p>
                </div>
                <div className="img3II"></div>
                <div className="info3">
                        <p>La finale de l'épreuve de vitesse.</p>
                </div>
                <div className="img4II"></div>
                <div className="info4">
                    <p>Le combat entre Italo Santelli (à gauche) et Jean-Baptiste Mimiague pendant l'épreuve des maîtres au fleuret.</p>
                </div>
                <div className="img5II"></div>
                <div className="info5">
                    <p>Le match entre les équipes française et britannique.</p>
                </div>
                <div className="img6II"></div>
                <div className="info6">
                    <p>L'équipe scandinave vainqueur du Racing Club de France, au tir à la corde.</p>
                </div>
                <div className="img7II"></div>
            </div>
        )
    }
}

export default IIs