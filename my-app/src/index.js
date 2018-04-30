import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//axios拦截器配置
import './config';
//redux管理器
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware ,compose} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'
//router
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import AuthRoute from '@/base/authroute';
import Dashboard from '@/base/dashboard'

import Register from '@/components/register/register'
import Bossinfo from '@/components/bossinfo/bossinfo'
import Geniusinfo from '@/components/geniusinfo/geniusinfo'
import Login from '@/components/login/login'
import registerServiceWorker from '@/registerServiceWorker'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware), // 允许我们 dispatch() 函数
    window.devToolsExtension ? window.devToolsExtension():f=>f
  )
)
ReactDOM.render(
  (<Provider store={store}>
  <Router>
    <div>
      <AuthRoute />
        <Switch>
            <Route path="/bossinfo" component={Bossinfo} />
            <Route path="/geniusinfo" component={Geniusinfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Dashboard}></Route>
        </Switch>
    </div>
  </Router>
  </Provider>),
  document.getElementById('root')
)
registerServiceWorker();
