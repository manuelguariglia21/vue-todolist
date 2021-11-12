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
    newObject:{
      toDoString: '',
        status: 'active'
    },
    newToDoString: '',
    error: false,

  },

  methods:{
    removeItem(index){
      this.toDoList.splice(index, 1);
    },

    insertToDo(){
      //controllo validità
      if(this.newToDoString.length < 3){
        this.error = true;
      setTimeout(()=>{
        this.error = false;
        }, 3000)
      }
      else{
        this.newObject.toDoString = this.newToDoString;
        this.toDoList.push(this.newObject);
        this.newToDoString = ' ';
      }
      this.newObject = {
        toDoString: '',
        status: 'active'
      }
    },
    
    isActive(item){
        if(item.status === 'disable'){
          item.status = 'active';
        }
        else item.status = 'disable';
    }




  }

  
})