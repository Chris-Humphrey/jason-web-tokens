import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Signup from './components/Signup';

let store = createStore(()=>{});

ReactDOM.render(
    
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path='/' component={Welcome}/>
                <Route path='/feature' component={Feature}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/signout' component={Signout}/>
            </App>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

