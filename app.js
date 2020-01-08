
import Vue from 'vue';
window.Vue = require('vue');

const vueApp = new Vue({
    el: '#app',
    data: { 
     display: 'redbox' 
    }
  })

  module.exports = {
      vueApp
  }