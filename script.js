function addTodo() {
    var input = document.getElementById("todoInput").value;
    if (input === "") {
      alert("Please enter a todo.");
      return;
    }
    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("todoInput").value = "";
  
    // Add delete functionality
    var deleteButton = document.createElement("span");
    deleteButton.appendChild(document.createTextNode("\u00D7"));
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      var listItem = this.parentElement;
      listItem.remove();
    };
    li.appendChild(deleteButton);
  }
  