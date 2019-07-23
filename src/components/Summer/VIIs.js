import React, { Component } from 'react'
import Header from '../Header'
import './VIIs.css'

class VIIs extends Component {
  
    render () {
        return (
            <div className="bodyVIIs">
                <Header />
                <img src={require("../../img/summer/VIIe/ceremonie.jpg")} alt="ceremonie" className="img1"></img>
                <div className="infosVII">
                    <span className="title">1920</span>
                    <span className="title">Anvers, Belgique</span>
                    <span className="details">20 août - 12 septembre</span>
                    <span className="details">29 nations</span>
                    <span className="details">2 561 hommes</span>
                    <span className="details">65 femmes</span>
                    <span className="details">22 sports</span>
                    <span className="details">154 épreuves</span>
                </div>
                <div className="info1">
                    <p>Deux ans après la fin de la Première Guerre Mondiale, exclusion de l’Allemagne et de l’Autriche. Premier utilisation du drapeau olympique et premier lâcher de pigeons en symbole de paix.</p>
                    <p>Le départ du marathon...</p>
                </div>
                <div className="img2VII"></div>
                <div className="info2">
                    <p>...et l'arrivée au stade.</p>
                </div>
                <div className="img3VII"></div>
                <div className="info3">
                    <p>Le départ de la finale du 200 mètres.</p>
                </div>
                <div className="img4VII"></div>
            </div>
        )
    }
}

export default VIIs