//import vueApp from '../app.js';

global.Vue = require('vue');

 const { vueApp } = require("../app.js")

describe('test vue cdn', function () {
    it('should run', function () {
      console.log(vueApp.hello())
    });
});
