let button =document.getElementById("addbtn");
let input = document.getElementById("inptask");
let task = document.getElementById("taskholder");
let deleteall = document.getElementById("dltall");
let save = document.getElementById("save");

button.addEventListener("click", function(){

    


    let currenttask = input.value;
    if (currenttask === "") return;
    let newtask = document.createElement("li");
    newtask.className = "task";
    newtask.innerText = currenttask;

    let datetime = document.createElement("span");
    datetime.className = "datetime";
    datetime.innerText = new Date().toLocaleString();
    newtask.appendChild(datetime);

    task.appendChild(newtask);
    input.value = "";

    let deltask = document.createElement("button");
    deltask.className = "delt";
    deltask.innerText = "Delete";
    newtask.appendChild(deltask);

    deltask.addEventListener("click", function(){
      newtask.remove();  
    })

    
});

deleteall.addEventListener("click", function(){
    task.innerHTML = "";
    localStorage.clear();
})

save.addEventListener("click", function(){
    localStorage.setItem("tasks", task.innerHTML);

})


let saved = localStorage.getItem("tasks");
if(saved){
    task.innerHTML = saved;
}

task.addEventListener("click", function(e){
    if(e.target.className === "delt"){
        e.target.parentElement.remove();
    }
});