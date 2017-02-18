var toDoList = {

  toDo: [],
  displayToDo: function(){
    
    console.log(this.toDo);
    
  },
  
  addToDo: function(toDoText){
    
    this.toDo.push({
      
      toDoText: toDoText,
      completed: false
      
    });
    this.displayToDo();

  },
  
  changeToDo: function(position, toDoText){
    
    this.toDo[position].toDoText = toDoText;
    this.displayToDo();
    
  },
  
  deleteToDo: function(position){
    
    this.toDo.splice(position, 1);
    this.displayToDo();
    
  }

};

