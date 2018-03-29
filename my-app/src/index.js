import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//axios拦截器配置
import './config';
//redux管理器
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware ,compose} from 'redux'
import userReducer from './reducer'
import {Provider} from 'react-redux'
//router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthRoute from '@/components/authroute';

import Login from '@/components/login/login'
import Register from '@/components/register/register'
import registerServiceWorker from '@/registerServiceWorker';

const store = createStore(
  userReducer,
  compose(
    applyMiddleware(thunkMiddleware), // 允许我们 dispatch() 函数
    window.devToolsExtension ? window.devToolsExtension():f=>f
  )
)
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">zhuce</Link>
        </li>
      </ul>
      <AuthRoute />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
