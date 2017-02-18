// Code goes here

// made a change
var me = {

  var toDo: ["yo", "hey", "sup", "suh"],
  displayToDo: function(){
    
    return toDo;
    
  },
  
  addToDo: function(position, value){
    
    toDo.splice(position, 0, value);
    displayToDo();
    
  },
  
  changeToDo: function(position, value){
    
    toDo[position] = value;
    displayToDo();
    
  },
  
  deleteToDo: function(position){
    
    toDo.splice(position, 1);
    displayToDo();
    
  }

}

toDo;