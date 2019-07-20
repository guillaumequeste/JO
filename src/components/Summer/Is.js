import React, { Component } from 'react'
import Header from '../Header'
import './Is.css'

class Is extends Component {
  
    render () {
        return (
            <div className="bodyIs">
                <Header />
                <img src={require("../../img/summer/Ie/stadeAthenes.jpg")} alt="stadeAthenes" className="img1"></img>
                <div className="infos">
                    <span className="title">1896</span>
                    <span className="title">Athènes, Grèce</span>
                    <span className="details">6 - 15 avril</span>
                    <span className="details">14 nations</span>
                    <span className="details">241 hommes</span>
                    <span className="details">0 femme</span>
                    <span className="details">9 sports</span>
                    <span className="details">43 épreuves</span>
                </div>
                <div className="info1">
                    <h3>Sports</h3>
                    <p>- sports athlétiques : courses à pied ; concours ; course à pied dite de Marathon</p>
                    <p>- gymnastique : exercices individuels ; mouvements d'ensemble</p>
                    <p>- escrime et lutte : assauts de fleuret, sabre et épée ; lutte</p>
                    <p>- sports nautiques : yachting ; aviron ; natation</p>
                    <p>- vélocipédie : vitesse ; fond</p>
                    <p>- équitation : concours d'équitation</p>
                    <p>- jeux athlétiques : lawn tennis ; cricket</p>
                </div>
                <div className="img2I"></div>
                <div className="info2">
                    <div className="info2suite">
                        <p>L'athlétisme est à la fois le sport le plus international avec neuf délégations représentées mais aussi celui qui attire le plus de participants. Les Américains dominent largement ces épreuves en gagnant neuf des douze épreuves. Aucun record du monde n'est cependant battu durant les quatre jours de compétition, en partie à cause de la courbure aiguë de la piste mais aussi parce que nombre des meilleurs athlètes du moment n'ont pas fait le déplacement à Athènes.</p>
                    </div>
                </div>
                <div className="img3I"></div>
                <div className="info3">
                    <div className="info3suite">
                        <p>L'escrime au Zappeion rapporte trois médailles à la délégation française.</p>
                    </div>
                </div>
                <div className="img4I"></div>
            </div>
        )
    }
}

export default Is