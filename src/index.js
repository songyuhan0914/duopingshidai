import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Routers from './routes';
import 'highlight.js/styles/github.css'
import './post.css';
import 'echarts/dist/echarts.min.js'
import Demo from './Demo.js'
import AppBar from './AppBar.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
render(<Routers />,document.getElementById('root'));
