import React, { Component } from 'react'
import Header from '../Header'
import './XIXs.css'

class XIXs extends Component {
  
    render () {
        return (
            <div className="bodyXIXs">
                <Header />
                <img src={require("../../img/summer/XIXe/azteca.png")} alt="azteca" className="img1"></img>
                <div className="infosXIX">
                    <span className="title">1968</span>
                    <span className="title">Mexico, Mexique</span>
                    <span className="details">12 - 27 octobre</span>
                    <span className="details">112 nations</span>
                    <span className="details">4 735 hommes</span>
                    <span className="details">781 femmes</span>
                    <span className="details">18 sports</span>
                    <span className="details">172 épreuves</span>
                </div>
                <div className="info1">
                    <p>Les américains Tommie Smith (centre) et John Carlos lèvent un poing ganté de noir aux Jeux olympiques de 1968. Les sprinteurs américains Tommie Smith et John Carlos ont levé le poing au ciel et salué à la manière du Black Power aux Jeux olympiques de Mexico en 1968. Le geste était une protestation symbolique contre le racisme aux États-Unis. Smith, le médaillé d’or, et Carlos, qui a remporté le bronze, ont été suspendus de leur équipe suite à cette action.</p>
                </div>
                <div className="img2XIX"></div>
            </div>
        )
    }
}

export default XIXs