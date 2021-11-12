var app = new Vue({
  el: '#app',
  data: {
    toDoList: [
      {
        toDoString: 'andare a fare la spesa',
        status: 'active'
      },
      {
        toDoString: 'bere',
        status: 'disable'
      },
      {
        toDoString: 'mangiare',
        status: 'active'
      },
      
    ],
    newToDoString: ' ',
    

  },

  methods:{
  }
})