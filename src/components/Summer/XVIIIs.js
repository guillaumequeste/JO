import React, { Component } from 'react'
import Header from '../Header'
import './XVIIIs.css'

class XVIIIs extends Component {
  
    render () {
        return (
            <div className="bodyXVIIIs">
                <Header />
                <img src={require("../../img/summer/XVIIIe/judo.jpg")} alt="judo" className="img1"></img>
                <div className="infos">
                    <span className="title">1964</span>
                    <span className="title">Tokyo, Japon</span>
                    <span className="details">10 - 24 octobre</span>
                    <span className="details">93 nations</span>
                    <span className="details">4 473 hommes</span>
                    <span className="details">678 femmes</span>
                    <span className="details">19 sports</span>
                    <span className="details">163 épreuves</span>
                </div>
                <div className="info1">
                    <p>Yoshinori Sakai, né à Hiroshima le 6 août 1945 allume la vasque olympique. Le Judo et le Volley-ball font leur apparition aux jeux.</p>
                    <p>Professeure d’EPS, la britannique Ann Packer est accueillie en tant que championne olympique par ses élèves. L’athlète britannique Ann Packer est acclamée par ses élèves de l’école pour filles Coombe County après avoir remporté le 800 m aux Jeux olympiques de Tokyo en 1964.</p>
                </div>
                <div className="img2XVIII"></div>
            </div>
        )
    }
}

export default XVIIIs