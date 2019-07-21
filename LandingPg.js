//Dom Elements
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let focus = document.getElementById("focus");

//show time
function showTime(){
    let time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
}
setInterval('showTime()', 1000);

//set background and greeting.

function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    //morning image and greeting
    if(hour < 12) {
        document.querySelector(".background-img").style.backgroundImage = "url(sunrise.jpg)";
        greeting.textContent = "Good Morning";
        document.body.style.color = "white";
        document.body.style.textShadow = "aquamarine 0 0 20px, blue 0px 0px 20px";
    //afternoon
    }else if(hour < 18){
        document.querySelector(".background-img").style.backgroundImage = "url(afternoon.jpg)";
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white";
        document.body.style.textShadow = "aquamarine 0 0 20px, blue 0px 0px 20px";

    //evening
    }else{
        document.querySelector(".background-img").style.backgroundImage = "url(night.jpg)";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
        document.body.style.textShadow = "aquamarine 0 0 20px, blue 0px 0px 20px";

    }
}
setBgGreet();

//get users name
function getName(){
    if(localStorage.getItem('name') === null) {//if there is nothing in local storage then go to next line
        //name.textContent = '[Enter Your Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
getName();


function setName(event){//this function ensures that if the enter key is pressed it send name data to
    //local storage and if clicked outside the text field same thing happens
    if(event.type === 'keypress') {
        //makes sure the enter key is pressed which is key code 13
        if (event.which == 13 || e.keyCode == 13) {//some browsers still supports 'which' browser compatibility
            localStorage.setItem('name', event.target.innerText);
            name.blur();
    }
} else {
    localStorage.setItem('name', event.target.innerText);
}
}

//get focus
function getFocus(){
    if(localStorage.getItem('focus') === null) {//if there is nothing in local storage then go to next line
       // focus.textContent = '[Enter Your Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
getFocus();


function setFocus(event){//this function is the same as above but for the focus field.
    if(event.type === 'keypress') {
    if(event.which == 13 || event.keyCode == 13) {
        localStorage.setItem('focus', event.target.innerText);
        focus.blur();
    }
} else {
    localStorage.setItem('focus', event.target.innerText);
}
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);//blur is when user clicks outside of the text input
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);













