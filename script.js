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
        
        this.toDo.forEach(function(todo){
            if (todo.completed === true){
                completedToDos++;
            }                        
        });
        
        this.toDo.forEach(function(todo){
            // case 1: if everything is true, make everything false
            if (completedToDos === totalToDos){
                todo.completed = false;                                
            } else {
            // case 2: otherwise, make everything true
                todo.completed = true;
            }
        });
    }
};

//        Get number of completed todos.
//        for (var i = 0; i < totalToDos; i++){
//            completedToDos++;
//        }
//        // case 1: if everything is true, make everything false
//        // With for loop
//        if (completedToDos === totalToDos){    
//            for (var i = 0; i < totalToDos; i++){
//                this.toDo[i].completed = false;
//            }
//            
//            // With forEach
//            if (completedToDos === totalToDos){
//                this.toDo.forEach(function(toDo){
//                    if (toDo.completed === true){
//                        toDo.completed = false;                 
//                        
//                    }
//                });       
//            
//            // case 2: otherwise, make everything true
//            // with for loop
//            } else {
//                for (var i = 0; i < totalToDos; i++){
//                    this.toDo[i].completed = true;
//                }
//            }
//        // with forEach
//        } else {
//            this.toDo.forEach(function(toDo){
//                toDo.completed = true; 
//            });
//        }

var handlers = {
    
    addToDo: function(){
        
        var addToDoTextInput = document.getElementById("addToDoTextInput");
        
        toDoList.addToDo(addToDoTextInput.value);
        addToDoTextInput.value = "";
        view.displayToDo();
        
    },
    
    changeToDo: function(){
        
        var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
        var changeToDoTextInput = document.getElementById("changeToDoTextInput");
        
        toDoList.changeToDo(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value);
        changeToDoPositionInput.valueAsNumber = "";
        changeToDoTextInput.value = "";
        
    },
    
    deleteToDo: function(position){
                
        toDoList.deleteToDo(position);
        view.displayToDo();
        
    },
    
    toggleCompleted: function(){
        
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        
        toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.valueAsNumber = "";      
        view.displayToDo();
        
    },
    
    toggleAll: function(){
                
        toDoList.toggleAll();
        view.displayToDo();
        
    }
        
};

var view = {
    
    displayToDo: function(){
        
        var toDosUl = document.querySelector("ul");
        toDosUl.innerHTML = "";
        
//        for (var i = 0; i < toDoList.toDo.length; i++){
//            
//            var toDoLi = document.createElement("li");
//            var toDo = toDoList.toDo[i];
//            var toDoTextWithCompletion = "";
//            
//            if (toDo.completed === true){                
//                toDoTextWithCompletion = "(x) " + toDo.toDoText;                
//            } else {                
//                toDoTextWithCompletion = "( ) " + toDo.toDoText;                
//            };
//            
//            toDoLi.id = i;
//            toDoLi.textContent = toDoTextWithCompletion;
//            toDoLi.appendChild(this.createDeleteButton());
//            toDosUl.appendChild(toDoLi);
//            
//        }
                
        toDoList.toDo.forEach(function(todo, position){
                                 
        var toDoLi = document.createElement("li");
        var toDoTextWithCompletion = "";
        
        if (todo.completed === true){
            toDoTextWithCompletion = "(x)" + todo.toDoText;
        } else {
            toDoTextWithCompletion = "( )" + todo.toDoText;
        }
        
        toDoLi.id = position;
        toDoLi.textContent = toDoTextWithCompletion;
        toDoLi.appendChild(this.createDeleteButton());
        toDosUl.appendChild(toDoLi);
        
    }, this);
    
},
    
    createDeleteButton: function(){
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";        
        
        return deleteButton;
        
    },
    
    setUpEventListeners: function(){
        
        var toDosUl = document.querySelector("ul");
        
        toDosUl.addEventListener("click", function(event){
            // Get the element that was clicked
            var elementClicked = event.target;
            
            // Check if elementClicked is a delete button.
            if (elementClicked.className === "deleteButton"){
                // Run handlers.deleteToDo(position);    
                handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
            }
            
        });
                
    }
    
};

view.setUpEventListeners();

