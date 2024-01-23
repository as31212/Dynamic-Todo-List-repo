//declaring dom variables
const inputContainer = document.getElementById("input-container");
const addTaskBtn = document.getElementById("add-task");
const removeTaskBtn = document.getElementById("remove-task");
const resetButton=document.getElementById('reset');

//function that will allow for me to add new task
const addTask = () => {
  const taskCounter =
    document.querySelectorAll('input[type="text"]').length+1;
  const HTML = `<div id="input-${taskCounter}">
  <input type="text" id="todo-input-task-${taskCounter}"></label><input type="time" id="todo-input-time-${taskCounter}"><input onclick="complete(${taskCounter})" id="todo-input-check-${taskCounter}" type="checkbox"><label id="todo-label-check-${taskCounter}" for="todo-input-check-${taskCounter}"> Incomplete</label>
    <button class="remove" onclick="removeEntry('${taskCounter}')" id="remove-button-${taskCounter}">X</button>
    <br id="br-${taskCounter}">
    </div>
    `;
  inputContainer.insertAdjacentHTML("beforeend", HTML);
};
addTaskBtn.addEventListener("click", () => {
  addTask();
});

//remove button function
//good job ahmad you made the code substantially shorter by creating a div dynamically that houses the other dynamically created elements and then removing it
const removeEntry = (id) => {
 const entry=document.getElementById(`input-${id}`);
 entry.remove();
};

//creating completion functionality

const complete=(id)=>{
const checkbox=document.getElementById(`todo-input-check-${id}`);
const label=document.getElementById(`todo-label-check-${id}`);
(checkbox.checked)?label.innerText=' Complete':label.innerText=' Incomplete';
}

//reset function
const reset=()=>{
  inputContainer.innerHTML=``;
}
resetButton.addEventListener('click',()=>{
  reset();
})