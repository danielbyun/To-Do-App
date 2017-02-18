// Code goes here

// made a change
var me = {

  toDo: ["yo", "hey", "sup", "suh"],
  displayToDo: function(){
    
    console.log(this.toDo);
    
  },
  
  addToDo: function(position, value){
    
    this.toDo.splice(position, 0, value);
    this.displayToDo();

  },
  
  changeToDo: function(position, value){
    
    this.toDo[position] = value;
    this.displayToDo();
    
  },
  
  deleteToDo: function(position){
    
    this.toDo.splice(position, 0);
    this.displayToDo();
    
  }

}

toDo;