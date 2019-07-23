import React, { Component } from 'react'
import Header from '../Header'
import './IXs.css'

class IXs extends Component {
  
    render () {
        return (
            <div className="bodyIXs">
                <Header />
                <img src={require("../../img/summer/IXe/stade.jpg")} alt="stade" className="img1"></img>
                <div className="infosIX">
                    <span className="title">1928</span>
                    <span className="title">Amsterdam, Pays-Bas</span>
                    <span className="details">17 mai - 12 août</span>
                    <span className="details">46 nations</span>
                    <span className="details">2 606 hommes</span>
                    <span className="details">277 femmes</span>
                    <span className="details">14 sports</span>
                    <span className="details">117 épreuves</span>
                </div>
                <div className="info1">
                    <p>L’Allemagne fait de nouveau partie des Jeux après 16 ans d’absence alors que des incidents diplomatiques se déroulent entre France et États-Unis. Pour la première fois, les femmes sont admises dans les épreuves de l’athlétisme.</p>
                    <p>Le retour de la délégation allemande.</p>
                </div>
                <div className="img2IX"></div>
            </div>
        )
    }
}

export default IXs