var toDoList = {
    
    toDo: [],
    
//    displayToDo: function(){
//        
//        if (this.toDo.length === 0){
//            
//            console.log("Your to-do list is empty!");
//            
//        } else {   
//        
//            console.log("My ToDos: ");
//        
//            for (var i = 0; i < this.toDo.length; i++){
//                
//                if (this.toDo[i].completed === true){
//                
//                    console.log('(x)', this.toDo[i].toDoText);
//               
//                } else {        
//                 
//                    console.log('( )', this.toDo[i].toDoText);
//                    
//                }
//                
//            }
//            
//        }
//    
//    },
//    
    addToDo: function(toDoText){
        
        this.toDo.push({
      
            toDoText: toDoText,
            completed: false
      
        });
    
        view.displayToDo();

    },
  
    changeToDo: function(position, toDoText){
    
        this.toDo[position].toDoText = toDoText;
        view.displayToDo();
    
    },
  
    deleteToDo: function(position){
    
        this.toDo.splice(position, 1);
        view.displayToDo();
    
    },
  
    toggleCompleted: function(position){
  
        // referencing the specific toDoList we're interested in
        var todo = this.toDo[position];
  	
        // we grab what it is, then we flip it with the bang operator (!)
        todo.completed = !todo.completed;
        view.displayToDo();
    
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
        
        view.displayToDo();
        
    }

};

var handlers = {
    
    displayToDo: function(){
        
        toDoList.displayToDo();
        
    },
    
    addToDo: function(){
        
        var addToDoTextInput = document.getElementById("addToDoTextInput");
        
        toDoList.addToDo(addToDoTextInput.value);
        addToDoTextInput.value = "";
        
    },
    
    changeToDo: function(){
        
        var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
        var changeToDoTextInput = document.getElementById("changeToDoTextInput");
        
        toDoList.changeToDo(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value);
        changeToDoPositionInput.valueAsNumber = "";
        changeToDoTextInput.value = "";
        
    },
    
    deleteToDo: function(){
        
        var deleteToDoPositionInput = document.getElementById("deleteToDoPositionInput");
        
        toDoList.deleteToDo(deleteToDoPositionInput.valueAsNumber);
        deleteToDoPositionInput.valueAsNumber = "";
        
    },
    
    toggleCompleted: function(){
        
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        
        toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.valueAsNumber = "";        
    },
    
    toggleAll: function(){
        
        toDoList.toggleAll();
        
    }
        
};

var view = {
    
    displayToDo: function(){
        
        var toDosUl = document.querySelector("ul");
        toDosUl.innerHTML = "";
        
        for (var i = 0; i < toDoList.toDo.length; i++){
            
            var toDoLi = document.createElement("li");
            var toDo = toDoList.toDo[i];
            var toDoTextWithCompletion = "";
            
            if (toDo.completed === true){                
                toDoTextWithCompletion = "(x) " + toDo.toDoText;                
            } else {                
                toDoTextWithCompletion = "( ) " + toDo.toDoText;                
            };
            
            toDoLi.textContent = toDoTextWithCompletion;
            toDosUl.appendChild(toDoLi);
            
        }
        
    },
    
    createDeleteButton: function(){
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";        
        
        return deleteButton;
        
    }
    
};
