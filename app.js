
const vueApp = new Vue({
    el: '#app',
    data: { 
     display: 'redbox' 
    },
    methods: {
        hello(){
            console.log('hi')
        }
    }
  })

  module.exports = {
      vueApp
  }
