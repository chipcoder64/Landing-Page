let ul = document.getElementById("myUl");
let currentTime = new Date();
const options = {weekday: "long", month: "short", day:"numeric"};
let year = currentTime.getFullYear();
let par = document.createElement("h4");

function add(){

  let li = document.createElement("li");// an element needs to be created then called in append child
  let item = document.getElementById("newItem").value;
  let itemTxt = document.createTextNode(item);
  let par = document.createElement("h4");
  let para = document.createElement("p");
    let btn = document.createElement("button");
    let btnDel = document.createTextNode("Delete");//adds delete text to button
    btn.setAttribute("onclick", "remove()");//this deletes when clicked
    btn.appendChild(btnDel);
    par.appendChild(itemTxt);
    ul.appendChild(li);//if the strikethrough is set to li then inheritance got to all children in the li.
    li.appendChild(par);//in order to make the strikethrough set to only the text and not the time stamp
    //i set a div inside the li with the input text before the time stamp so strikethrough only for the text and not the time stamp
    li.appendChild(btn);//appends child to the DOM
    li.append('Date Created: ' + currentTime.toLocaleDateString("en-US", options) + ' ' + year);//options needs to
    //be set otherwise the time will display as full length which includes gmt 
    localStorage["list"] = ul.innerHTML;

}

ul.addEventListener('click', function(element){//addeventlistener must be placed inside the add function
  //if placed outside the function strikethrough only occurs on the first li.
     if(element.target.nodeName === 'H4'){
      element.target.classList.toggle('line');
      element.target.classList.toggle('text');
  }
  localStorage["list"] = ul.innerHTML;

})


function remove(){//to update local storage
    let task = this.event.currentTarget.parentNode;
    ul.removeChild(task);
    localStorage["list"] = ul.innerHTML
}

if(localStorage["list"]){
  ul.innerHTML = localStorage["list"];
}

