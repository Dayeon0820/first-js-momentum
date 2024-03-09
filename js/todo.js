const todoForm= document.querySelector("#todo-form");
const todoInput= document.querySelector("#todo-form input");
const todoList= document.querySelector("#todo-list");
let todos= [];


function createTodoList(savedTodo){
    const li= document.createElement("li");
    const span= document.createElement("span");
    const btn= document.createElement("button");
    li.appendChild(span);
    li.id=savedTodo.id;
    span.innerText=savedTodo.Text;
    todoList.appendChild(li);
    span.after(btn);
    btn.addEventListener("click", deleteButton);
}

function savingToDoList(){
    localStorage.setItem("todos", JSON.stringify(todos) );
}


function handleTodoSubmit(event){
    event.preventDefault();
    const savedTodo= todoInput.value;
    todoInput.value="";
    const todoObj = {Text: savedTodo, id: Date.now(),};
    createTodoList(todoObj);
    todos.push(todoObj);
    savingToDoList();
}

function deleteButton(event){
    const parentLi= event.target.parentElement;
    parentLi.remove();
    todos= todos.filter(item => item.id !== parseInt(parentLi.id));
    savingToDoList();

}

const savedTodos = localStorage.getItem("todos");

if(savedTodos!==null){
    const pursedTodos = JSON.parse(savedTodos);
    pursedTodos.forEach(createTodoList);
    todos=pursedTodos;
        
    };


todoForm.addEventListener("submit", handleTodoSubmit);


