var toDoList = {
    
    toDo: [],
    
    displayToDo: function(){
        
        if (this.toDo.length === 0){
            
            console.log("Your to-do list is empty!");
            
        } else {   
        
            console.log("My ToDos: ");
        
            for (var i = 0; i < this.toDo.length; i++){
                console.log(this.toDo[i].toDoText);
            }
            
        }
    
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
    
    },
  
    toggleCompleted: function(position){
  
        // referencing the specific toDoList we're interested in
        var todo = this.toDo[position];
  	
        // we grab what it is, then we flip it with the bang operator (!)
        todo.completed = !todo.completed;
        this.displayToDo();
    
    }

};

