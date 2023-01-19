document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form")
 
  createTaskForm.addEventListener("submit", submitEvent)

  function submitEvent(event) {
    event.preventDefault()
    console.log("submitted")
    console.log(event.target.children[1].value)
    const tasks = document.getElementById("tasks")
    const list = document.createElement("li")
    list.textContent = event.target.children[1].value
    tasks.append(list)
    
  }
  

});
