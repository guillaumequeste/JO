import React, { Component } from 'react'
import Header from '../Header'
import './XXs.css'

class XXs extends Component {
  
    render () {
        return (
            <div className="bodyXXs">
                <Header />
                <img src={require("../../img/summer/XXe/est.jpg")} alt="est" className="img1"></img>
                <div className="infos">
                    <span className="title">1972</span>
                    <span className="title">Munich, Allemagne de l'Ouest</span>
                    <span className="details">26 août - 11 septembre</span>
                    <span className="details">121 nations</span>
                    <span className="details">6 075 hommes</span>
                    <span className="details">1 059 femmes</span>
                    <span className="details">21 sports</span>
                    <span className="details">195 épreuves</span>
                </div>
                <div className="info1">
                    <p>Prise d’otages au village olympique en 1972. L’organisation terroriste Septembre noir a pris en otage et tué 11 membres de l'équipe olympique d'Israël durant les Jeux olympiques de Munich, en 1972.</p>
                </div>
                <div className="img2XX"></div>
            </div>
        )
    }
}

export default XXs