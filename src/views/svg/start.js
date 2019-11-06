import Vue from 'vue'
import SvgIcon from './svgIcon' // svg组件


// register globally
Vue.component('svg-icon', SvgIcon)     

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svgs', true, /\.svgs$/) 
requireAll(req);

