import React, { Component } from 'react'
import Header from './Header'
import './Contact.css'

class Contact extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <div className="bodyContact">
                    <div className="contact">
                        <h3 className="fontContact">guillaume.queste@laposte.net</h3>
                        <h3 className="fontContact">http://www.guillaumequeste.fr</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact