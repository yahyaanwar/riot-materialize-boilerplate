import { component } from 'riot'

import 'jquery';
import 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import 'material-icons/iconfont/material-icons.scss'

import Index from './src/index.riot'

import './global.scss'


component(Index)(document.getElementById('root'))
