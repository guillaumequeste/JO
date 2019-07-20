import React, { Component } from 'react'
import Header from '../Header'
import './XXIIs.css'

class XXIIs extends Component {
  
    render () {
        return (
            <div className="bodyXXIIs">
                <Header />
                <img src={require("../../img/summer/XXIIe/loujniki.jpg")} alt="loujniki" className="img1"></img>
                <div className="infos">
                    <span className="title">1980</span>
                    <span className="title">Moscou, Union Soviétique</span>
                    <span className="details">19 juillet - 3 août</span>
                    <span className="details">80 nations</span>
                    <span className="details">4 064 hommes</span>
                    <span className="details">1 115 femmes</span>
                    <span className="details">21 sports</span>
                    <span className="details">203 épreuves</span>
                </div>
                <div className="info1">
                    <p>Le polonais Wladyslaw Kozakiewicz fait un bras d’honneur à l’Union soviétique en 1980. Lors des Jeux olympiques de Moscou, l'athlète est constamment sifflé par le public du stade, ce qui ne l'empêche pas d'emporter une médaille d'or en saut à la perche.</p>
                </div>
                <div className="img2XXII"></div>
            </div>
        )
    }
}

export default XXIIs