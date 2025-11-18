// USER SECTION

var date = document.querySelector("#Date");
var enterBtn=document.querySelector("#enter");
var userName=document.getElementById("user");
var nameField=document.getElementById("username");
var nameContainer=document.querySelector("#nameField");
var identityCheck=document.querySelector("#identity");

var dateObj=new Date()
currentDate=dateObj.toISOString();
date.innerHTML=currentDate.slice(0,10);

// Object for changing the Profile image
var profile=document.getElementById("profile");
var genderCheck=document.getElementsByName("gender");
console.log(genderCheck[1].value)
console.log(genderCheck.length)
const profileImage={
    "male":"images/male.png",
    "female":"images/female.png"
}


enterBtn.addEventListener("click",() => {
    let name=userName.value;
    localStorage.setItem("name",name)
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
