import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Summer from './components/Summer/Summer'
import Is from './components/Summer/Is'
import IIs from './components/Summer/IIs'
import IIIs from './components/Summer/IIIs'
import IVs from './components/Summer/IVs'
import Vs from './components/Summer/Vs'
import VIs from './components/Summer/VIs'
import VIIs from './components/Summer/VIIs'
import VIIIs from './components/Summer/VIIIs'
import IXs from './components/Summer/IXs'
import Xs from './components/Summer/Xs'
import XIs from './components/Summer/XIs'
import XIIs from './components/Summer/XIIs'
import XIIIs from './components/Summer/XIIIs'
import XIVs from './components/Summer/XIVs'
import XVs from './components/Summer/XVs'
import XVIs from './components/Summer/XVIs'
import XVIIs from './components/Summer/XVIIs'
import XVIIIs from './components/Summer/XVIIIs'
import XIXs from './components/Summer/XIXs'
import XXs from './components/Summer/XXs'
import XXIs from './components/Summer/XXIs'
import XXIIs from './components/Summer/XXIIs'
import XXIIIs from './components/Summer/XXIIIs'
import XXIVs from './components/Summer/XXIVs'
import XXVs from './components/Summer/XXVs'
import XXVIs from './components/Summer/XXVIs'
import XXVIIs from './components/Summer/XXVIIs'
import XXVIIIs from './components/Summer/XXVIIIs'
import XXIXs from './components/Summer/XXIXs'
import XXXs from './components/Summer/XXXs'
import XXXIs from './components/Summer/XXXIs'
import XXXIIs from './components/Summer/XXXIIs'
import XXXIIIs from './components/Summer/XXXIIIs'
import XXXIVs from './components/Summer/XXXIVs'
import Summer from './components/Winter/Winter'
import Iw from './components/Winter/Iw'
import IIw from './components/Winter/IIw'
import IIIw from './components/Winter/IIIw'
import IVw from './components/Winter/IVw'
import Vw from './components/Winter/Vw'
import VIw from './components/Winter/VIw'
import VIIw from './components/Winter/VIIw'
import VIIIw from './components/Winter/VIIIw'
import IXw from './components/Winter/IXw'
import Xw from './components/Winter/Xw'
import XIw from './components/Winter/XIw'
import XIIw from './components/Winter/XIIw'
import XIIIw from './components/Winter/XIIIw'
import XIVw from './components/Winter/XIVw'
import XVw from './components/Winter/XVw'
import XVIw from './components/Winter/XVIw'
import XVIIw from './components/Winter/XVIIw'
import XVIIIw from './components/Winter/XVIIIw'
import XIXw from './components/Winter/XIXw'
import XXw from './components/Winter/XXw'
import XXIw from './components/Winter/XXIw'
import XXIIw from './components/Winter/XXIIw'
import XXIIIw from './components/Winter/XXIIIw'
import XXIVw from './components/Winter/XXIVw'
import XXVw from './components/Winter/XXVw'
import Antiquity from './components/Antiquity'
import Contact from './components/Contact'

import ErrorNotFound from './components/ErrorNotFound'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/summer' component={Summer}/>
            <Route path='/Is' component={Is}/>
            <Route path='/IIs' component={IIs}/>
            <Route path='/IIIs' component={IIIs}/>
            <Route path='/IVs' component={IVs}/>
            <Route path='/Vs' component={Vs}/>
            <Route path='/VIs' component={VIs}/>
            <Route path='/VIIs' component={VIIs}/>
            <Route path='/VIIIs' component={VIIIs}/>
            <Route path='/IXs' component={IXs}/>
            <Route path='/Xs' component={Xs}/>
            <Route path='/XIs' component={XIs}/>
            <Route path='/XIIs' component={XIIs}/>
            <Route path='/XIIIs' component={XIIIs}/>
            <Route path='/XIVs' component={XIVs}/>
            <Route path='/XVs' component={XVs}/>
            <Route path='/XVIs' component={XVIs}/>
            <Route path='/XVIIs' component={XVIIs}/>
            <Route path='/XVIIIs' component={XVIIIs}/>
            <Route path='/XIXs' component={XIXs}/>
            <Route path='/XXs' component={XXs}/>
            <Route path='/XXIs' component={XXIs}/>
            <Route path='/XXIIs' component={XXIIs}/>
            <Route path='/XXIIIs' component={XXIIIs}/>
            <Route path='/XXIVs' component={XXIVs}/>
            <Route path='/XXVs' component={XXVs}/>
            <Route path='/XXVIs' component={XXVIs}/>
            <Route path='/XXVIIs' component={XXVIIs}/>
            <Route path='/XXVIIIs' component={XXVIIIs}/>
            <Route path='/XXIXs' component={XXIXs}/>
            <Route path='/XXXs' component={XXXs}/>
            <Route path='/XXXIs' component={XXXIs}/>
            <Route path='/XXXIIs' component={XXXIIs}/>
            <Route path='/XXXIIIs' component={XXXIIIs}/>
            <Route path='/XXXIVs' component={XXXIVs}/>

            <Route path='/winter' component={Winter}/>
            <Route path='/Iw' component={Iw}/>
            <Route path='/IIw' component={IIw}/>
            <Route path='/IIIw' component={IIIw}/>
            <Route path='/IVw' component={IVw}/>
            <Route path='/Vw' component={Vw}/>
            <Route path='/VIw' component={VIw}/>
            <Route path='/VIIw' component={VIIw}/>
            <Route path='/VIIIw' component={VIIIw}/>
            <Route path='/IXw' component={IXw}/>
            <Route path='/Xw' component={Xw}/>
            <Route path='/XIw' component={XIw}/>
            <Route path='/XIIw' component={XIIw}/>
            <Route path='/XIIIw' component={XIIIw}/>
            <Route path='/XIVw' component={XIVw}/>
            <Route path='/XVw' component={XVw}/>
            <Route path='/XVIw' component={XVIw}/>
            <Route path='/XVIIw' component={XVIIw}/>
            <Route path='/XVIIIw' component={XVIIIw}/>
            <Route path='/XIXw' component={XIXw}/>
            <Route path='/XXw' component={XXw}/>
            <Route path='/XXIw' component={XXIw}/>
            <Route path='/XXIIw' component={XXIIw}/>
            <Route path='/XXIIIw' component={XXIIIw}/>
            <Route path='/XXIVw' component={XXIVw}/>
            <Route path='/XXVw' component={XXVw}/>

            <Route path='/antiquity' component={Antiquity}/>
            <Route path='/contact' component={Contact}/>

            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();