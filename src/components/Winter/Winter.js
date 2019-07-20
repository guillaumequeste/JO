import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import './Winter.css'

class Winter extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <div className="bodyWinter">
                    <img src={require("../../img/winter/ski.jpg")} alt="ski" className="ski"></img>
                    <Link to="/Iw">
                        <img src={require("../../img/winter/Ih.jpg")} alt="Ih" className="Ih affiche"></img>
                    </Link>
                    <Link to="/IIw">
                        <img src={require("../../img/winter/IIh.jpg")} alt="IIh" className="IIh affiche"></img>
                    </Link>
                    <Link to="/IIIw">
                        <img src={require("../../img/winter/IIIh.png")} alt="IIIh" className="IIIh affiche"></img>
                    </Link>
                    <Link to="/IVw">
                        <img src={require("../../img/winter/IVh.png")} alt="IVh" className="IVh affiche"></img>
                    </Link>
                    <Link to="/IVaw">
                        <img src={require("../../img/winter/IVah.png")} alt="IVah" className="IVah affiche"></img>
                    </Link>
                    <Link to="/IVbw">
                        <img src={require("../../img/winter/IVbh.png")} alt="IVbh" className="IVbh affiche"></img>
                    </Link>
                    <Link to="/Vw">
                        <img src={require("../../img/winter/Vh.png")} alt="Vh" className="Vh affiche"></img>
                    </Link>
                    <Link to="/VIw">
                        <img src={require("../../img/winter/VIh.png")} alt="VIh" className="VIh affiche"></img>
                    </Link>
                    <Link to="/VIIw">
                        <img src={require("../../img/winter/VIIh.jpg")} alt="VIIh" className="VIIh affiche"></img>
                    </Link>
                    <Link to="/VIIIw">
                        <img src={require("../../img/winter/VIIIh.png")} alt="VIIIh" className="VIIIh affiche"></img>
                    </Link>
                    <Link to="/IXw">
                        <img src={require("../../img/winter/IXh.png")} alt="IXh" className="IXh affiche"></img>
                    </Link>
                    <Link to="/Xw">
                        <img src={require("../../img/winter/Xh.png")} alt="Xh" className="Xh affiche"></img>
                    </Link>
                    <Link to="/XIw">
                        <img src={require("../../img/winter/XIh.png")} alt="XIh" className="XIh affiche"></img>
                    </Link>
                    <Link to="/XIIw">
                        <img src={require("../../img/winter/XIIh.png")} alt="XIIh" className="XIIh affiche"></img>
                    </Link>
                    <Link to="/XIIIw">
                        <img src={require("../../img/winter/XIIIh.png")} alt="XIIIh" className="XIIIh affiche"></img>
                    </Link>
                    <Link to="/XIVw">
                        <img src={require("../../img/winter/XIVh.png")} alt="XIVh" className="XIVh affiche"></img>
                    </Link>
                    <Link to="/XVw">
                        <img src={require("../../img/winter/XVh.png")} alt="XVh" className="XVh affiche"></img>
                    </Link>
                    <Link to="/XVIw">
                        <img src={require("../../img/winter/XVIh.png")} alt="XVIh" className="XVIh affiche"></img>
                    </Link>
                    <Link to="/XVIIw">
                        <img src={require("../../img/winter/XVIIh.png")} alt="XVIIh" className="XVIIh affiche"></img>
                    </Link>
                    <Link to="/XVIIIw">
                        <img src={require("../../img/winter/XVIIIh.png")} alt="XVIIIh" className="XVIIIh affiche"></img>
                    </Link>
                    <Link to="/XIXw">
                        <img src={require("../../img/winter/XIXh.png")} alt="XIXh" className="XIXh affiche"></img>
                    </Link>
                    <Link to="/XXw">
                        <img src={require("../../img/winter/XXh.png")} alt="XXh" className="XXh affiche"></img>
                    </Link>
                    <Link to="/XXIw">
                        <img src={require("../../img/winter/XXIh.png")} alt="XXIh" className="XXIh affiche"></img>
                    </Link>
                    <Link to="/XXIIw">
                        <img src={require("../../img/winter/XXIIh.png")} alt="XXIIh" className="XXIIh affiche"></img>
                    </Link>
                    <Link to="/XXIIIw">
                        <img src={require("../../img/winter/XXIIIh.png")} alt="XXIIIh" className="XXIIIh affiche"></img>
                    </Link>
                    <Link to="/XXIVw">
                        <img src={require("../../img/winter/XXIVh.png")} alt="XXIVh" className="XXIVh affiche"></img>
                    </Link>
                    <Link to="/XXVw">
                        <img src={require("../../img/winter/XXVh.png")} alt="XXVh" className="XXVh affiche"></img>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Winter