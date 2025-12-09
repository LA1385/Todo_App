// USER SECTION

var date = document.querySelector("#Date");
var enterBtn=document.querySelector("#enter");
var userName=document.getElementById("user");
var nameField=document.getElementById("username");
var nameContainer=document.querySelector("#nameField");
var identityCheck=document.querySelector("#identity");

// DAILY DATE
var dateObj=new Date()
currentDate=dateObj.toISOString();
date.innerHTML=currentDate.slice(0,10);

// OBJECT-FOR CHANGING PROFILE IMAGE
var profile=document.getElementById("profile");
var genderCheck=document.getElementsByName("gender");
const profileImage={
    "male":"images/male.png",
    "female":"images/female.png"
}


// LOAD SAVED DATA WHEN PAGE LOADS
window.addEventListener("load",() => {
    const savedName=localStorage.getItem("name")
    const savedGender=localStorage.getItem("gender")

    if (savedName){
        nameField.innerHTML = "Hi " + savedName;
        identityCheck.classList.add("hidden");
        nameContainer.classList.remove("hidden");
        nameContainer.classList.add("block");
        date.classList.remove("hidden");
        enterBtn.classList.add("hidden");
}       

    if (savedGender=="male"){
        profile.src=profileImage.male
    }
    else if (savedGender == "female"){
        profile.src = profileImage.female
    }
})



// AFTER CLICKING ENTER BUTTON
enterBtn.addEventListener("click",() => {
    let name=userName.value;
    localStorage.setItem("name",name)
    for (let a=0; a<genderCheck.length; a++){
        if (genderCheck[a].checked){
            localStorage.setItem("gender",genderCheck[a].value)
        }
        
    }
    if (!name){
        alert("Please Enter a Username and Pick a Gender")
    }
    else{
        nameField.innerHTML="Hi " + name;
        identityCheck.classList.add("hidden");
        nameContainer.classList.remove("hidden");
        nameContainer.classList.add("block");
        date.classList.remove("hidden");
        enterBtn.classList.add("hidden"); 
        location.reload();
        for (let a=0;a<genderCheck.length;a++){
            if (genderCheck[a].checked && genderCheck[a].value == "male"){
                profile.src=profileImage.male;
            }
            else if (genderCheck[a].checked && genderCheck[a].value == "female"){
                profile.src = profileImage.female;
            }
        }
    }
})

var changeUsername = document.getElementById("c_username");
changeUsername.addEventListener("click",() => {
    identityCheck.classList.remove("hidden");
    nameContainer.classList.add("hidden");
    nameContainer.classList.remove("block");
    date.classList.add("hidden");
    enterBtn.classList.remove("hidden");
    profile.src="images/default.png";
    
})


// Motivation Section
var quoteButton = document.getElementById("G_Quote");
var quoteAuthor = document.getElementById("name");
var quoteContent = document.getElementById("Quote")

const apiUrl = "https://dummyjson.com/quotes/random";

async function getQuote() {
    try{
        quoteButton.innerText= "Loading..."
        quoteButton.disabled=true;

        const response=await fetch(apiUrl);
        const data=await response.json();
        const quoteText = data.quote;
        const quoteName = data.author;

        quoteContent.innerText=quoteText;
        quoteAuthor.innerText="~" + quoteName;
        quoteButton.innerText="Generate a Quote";
        quoteButton.disabled=false;
        console.log(data)
    }
    catch (error) {
        console.log(error)
        quoteContent.innerText="An error happened,try again";
        quoteAuthor.innerText="An error occured";
        quoteButton.innerText = "Generate a Quote";
        quoteButton.disabled = false;
    }
}

getQuote()
quoteButton.addEventListener("click",getQuote);

// ADDING THE TO DO LIST
var taskInputed=document.getElementById("task");
var timeInputed = document.getElementById("time");
var addTask = document.getElementById("A_task");
var taskContainer = document.getElementById("tasks");


addTask.addEventListener("click",() =>{
    let task=taskInputed.value;
    let time=timeInputed.value;
    
    let getName=localStorage.getItem("name");
    let taskKey="task_" + getName 
 
    let savedTask=localStorage.getItem(taskKey);
    let allTasks=savedTask? JSON.parse(savedTask) :[];

    if (task && time){
        allTasks.push({task: task, time:time})
        localStorage.setItem(taskKey,JSON.stringify(allTasks))

        taskContainer.innerHTML +=
        "<div class='task-item w-full bg-black flex flex-row justify-between items-center p-2 text-white rounded-md mb-2 '>" +
            "<div class='flex'>" +
                "<li class='list-none w-full text-lg font-semibold'>" + task + "</li>" +
            "</div>" +
            "<div class='flex flex-row gap-x-3 justify-center items-center'>"+
                " <li class='list-none text-lg w-full font-semibold'>"+ time +"</li>" +
                "<span class='checked_done p-2 bg-white rounded-full text-black text-sm font-semibold'>Done</span>"+
            "</div>"+
        "</div>";  

        taskInputed.value="";
        timeInputed.value="";
    }
    else{
        alert("Ensure you fill in both,You need to be time conscious you know.")
    }
})
// Retaining the task addded when reload
function loadWindow() {
    window.addEventListener("load", () => {

        let getName = localStorage.getItem("name");
        let taskKey = "task_" + getName

        let savedTask = localStorage.getItem(taskKey);
        let allTasks = savedTask ? JSON.parse(savedTask) : [];

        allTasks.forEach(item => {
            taskContainer.innerHTML +=
                "<div class='task-item w-full bg-black flex flex-row justify-between items-center p-2 text-white rounded-md mb-2 '>" +
                "<div class='flex'>" +
                "<li class='list-none w-full text-lg font-semibold'>" + item.task + "</li>" +
                "</div>" +
                "<div class='flex flex-row gap-x-3 justify-center items-center'>" +
                " <li class='list-none text-lg w-full font-semibold'>" + item.time + "</li>" +
                "<span class='p-2 bg-white rounded-full text-black text-sm font-semibold checked_done'>Done</span>"
                "</div>" +
                "</div>";
        });
    })
}

loadWindow()

taskContainer.addEventListener("click",(e) => {
    if (e.target.classList.contains("checked_done")){
        console.log("element has been clicked")
        taskDiv = e.target.closest(".task-item")
        
        let getName=localStorage.getItem("name");
        let taskKey="task_" + getName;
        let savedTask=localStorage.getItem(taskKey);
        let allTasks=savedTask? JSON.parse(savedTask) : [];

        // find the task to delete
        let taskIndex=Array.from(taskContainer.children).indexOf(taskDiv)
        allTasks.splice(taskIndex,1)

        localStorage.setItem(taskKey,JSON.stringify(allTasks));
        taskDiv.remove()
    }
})
