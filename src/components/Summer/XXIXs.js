import React, { Component } from 'react'
import Header from '../Header'
import './XXIXs.css'

class XXIXs extends Component {
  
    render () {
        return (
            <div className="bodyXXIXs">
                <Header />
                <img src={require("../../img/summer/XXIXe/nid_d_oiseau.jpg")} alt="nid_d_oiseau" className="img1"></img>
                <div className="infos">
                    <span className="title">2008</span>
                    <span className="title">Pékin, Chine</span>
                    <span className="details">8 - 24 août</span>
                    <span className="details">204 nations</span>
                    <span className="details">6 305 hommes</span>
                    <span className="details">4 637 femmes</span>
                    <span className="details">28 sports</span>
                    <span className="details">302 épreuves</span>
                </div>
                <div className="info1">
                    <p>Menace de boycott face aux problèmes de minorités ethniques et de droits de l’homme.</p>
                    <p>Le cubain Ángel Valodia Matos frappe l'arbitre aux Jeux de Pékin de 2008. Ángel Valodia Matos met un coup de pied à l’arbitre Chakir Chelbat après avoir perdu le match pour la médaille de bronze en taekwondo dans la catégorie hommes de plus de 80 kg durant les Jeux olympiques de Pékin, le 23 août 2008.</p>
                </div>
                <div className="img2XXIX"></div>
                <div className="info2">
                    <p>En 2008, l'américain Michael Phelps rentre chez lui avec 8 médailles d'or. Michael Phelps régit après avoir remporté la finale du 100 m papillon messieurs durant les Jeux olympiques de Pékin en 2008.</p>
                </div>
                <div className="img3XXIX"></div>
            </div>
        )
    }
}

export default XXIXs