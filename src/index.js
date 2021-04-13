import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css'; //

import { Provider } from "react-redux";
import store from './Internship/Redux/store'

ReactDom.render(
                        
        <Provider store={store} >
                 <App />
        </Provider>,

  document.getElementById('root'));




