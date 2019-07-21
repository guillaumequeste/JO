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
                    <p>Neuf athlètes israéliens ainsi qu’un policier sont assassinés le 5 septembre au village Olympique par des terroristes palestiniens lors d’une prise d’otages.</p>
                </div>
                <div className="img2XX"></div>
            </div>
        )
    }
}

export default XXs