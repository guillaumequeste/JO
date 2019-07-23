import React, { Component } from 'react'
import Header from '../Header'
import './XXXs.css'

class XXXs extends Component {
  
    render () {
        return (
            <div className="bodyXXXs">
                <Header />
                <img src={require("../../img/summer/XXXe/ceremonie.jpg")} alt="ceremonie" className="img1XXX"></img>
                <div className="infosXXX">
                    <span className="title">2012</span>
                    <span className="title">Londres, Royaume-Uni</span>
                    <span className="details">27 juillet - 12 août</span>
                    <span className="details">204 nations</span>
                    <span className="details">5 892 hommes</span>
                    <span className="details">4 676 femmes</span>
                    <span className="details">26 sports</span>
                    <span className="details">302 épreuves</span>
                </div>
                <div className="info1">
                    <p>Triplé jamaïcain au 200m.</p>
                </div>
                <div className="img2XXX"></div>
                <div className="info2">
                    <p>Michael Phelps écrit l'histoire dans la piscine. Il remporte sa 20ème médaille olympique.</p>
                </div>
                <div className="img3XXX"></div>
            </div>
        )
    }
}

export default XXXs