var toDoList = {
    
    toDo: [],
    
    displayToDo: function(){
        
        if (this.toDo.length === 0){
            
            console.log("Your to-do list is empty!");
            
        } else {   
        
            console.log("My ToDos: ");
        
            for (var i = 0; i < this.toDo.length; i++){
                
                if (this.toDo[i].completed === true){
                
                    console.log('(x)', this.toDo[i].toDoText);
               
                } else {        
                 
                    console.log('( )', this.toDo[i].toDoText);
                    
                }
                
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
    
    },
    
    toggleAll: function(){
        
        var totalToDos = this.toDo.length;
        var completedToDos = 0;
        
        for (var i = 0; i < totalToDos; i++){
            
            completedToDos++;
            
        }
        
        // case 1: if everything is true, make everything false
        if (completedToDos === totalToDos){
            
            for (var i = 0; i < totalToDos; i++){
            
                this.toDo[i].completed = false;
                
            }
            
        // case 2: otherwise, make everything true
        } else {
            
            for (var i = 0; i < totalToDos; i++){
                
                this.toDo[i].completed = true;
                
            }
            
        }
        
        this.displayToDo();
        
    }

};

