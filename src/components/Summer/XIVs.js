import React, { Component } from 'react'
import Header from '../Header'
import './XIVs.css'

class XIVs extends Component {
  
    render () {
        return (
            <div className="bodyXIVs">
                <Header />
                <img src={require("../../img/summer/XIVe/tamise.jpeg")} alt="tamise" className="img1"></img>
                <div className="infos">
                    <span className="title">1948</span>
                    <span className="title">Londres, Royaume-Uni</span>
                    <span className="details">29 juillet - 14 août</span>
                    <span className="details">59 nations</span>
                    <span className="details">3 714 hommes</span>
                    <span className="details">390 femmes</span>
                    <span className="details">17 sports</span>
                    <span className="details">136 épreuves</span>
                </div>
                <div className="info1">
                    <p>Trois ans après la fin de la Deuxième Guerre Mondiale, le Japon, l’URSS et l’Allemagne ne participent pas aux Jeux. Les Jeux sont retransmis à la télévision. Utilisation des starting-blocks dans certaines courses d’athlétisme.</p>
                    <p>Les tours jumelles du Stade de Wembley en 2000, avant leur destruction (qui a eu lieu en 2002).</p>
                </div>
                <div className="img2XIV"></div>
            </div>
        )
    }
}

export default XIVs