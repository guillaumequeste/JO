import React, { Component } from 'react'
import Header from '../Header'
import './Vs.css'

class Vs extends Component {
  
    render () {
        return (
            <div className="bodyVs">
                <Header />
                <img src={require("../../img/summer/Ve/ceremonie.jpg")} alt="ceremonie" className="img1"></img>
                <div className="infosV">
                    <span className="title">1912</span>
                    <span className="title">Stockholm, Suède</span>
                    <span className="details">12 mai - 27 juillet</span>
                    <span className="details">28 nations</span>
                    <span className="details">2 359 hommes</span>
                    <span className="details">48 femmes</span>
                    <span className="details">14 sports</span>
                    <span className="details">102 épreuves</span>
                </div>
                <div className="info1">
                    <p>Premier chronométrage électronique pour les courses d’athlétisme, et premiere photo-finish (photo d’arrivée).</p>
                    <p>Jean Bouin devancé par Hannes Kolehmainen sur le 5 000 m.</p>
                </div>
                <div className="img2V"></div>
                <div className="info2">
                    <p>Le Suédois Oscar Swahn.</p>
                </div>
                <div className="img3V"></div>
            </div>
        )
    }
}

export default Vs