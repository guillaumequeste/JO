import React, { Component } from 'react'
import Header from '../Header'
import './VIIIs.css'

class VIIIs extends Component {
  
    render () {
        return (
            <div className="bodyVIIIs">
                <Header />
                <img src={require("../../img/summer/VIIIe/delegations.jpg")} alt="delegations" className="img1"></img>
                <div className="infos">
                    <span className="title">1924</span>
                    <span className="title">Paris, France</span>
                    <span className="details">4 mai - 27 juillet</span>
                    <span className="details">44 nations</span>
                    <span className="details">2 954 hommes</span>
                    <span className="details">135 femmes</span>
                    <span className="details">17 sports</span>
                    <span className="details">126 épreuves</span>
                </div>
                <div className="info1">
                    <p>L’Allemagne ne participe toujours pas. Seuls les Comités nationaux olympiques pouvaient inscrire des participants. Les athlètes sont logés dans un village olympique.</p>
                    <p>Les 45 portes-drapeau (Géo André au centre).</p>
                </div>
                <div className="img2VIII"></div>
                <div className="info2">
                    <p>L'équipe de rugby des États-Unis.</p>
                </div>
                <div className="img3VIII"></div>
            </div>
        )
    }
}

export default VIIIs