// Your code goes here
var x = document.querySelector(".logo-heading");
x.addEventListener("mouseover", myFunctionX);
x.addEventListener("mouseout",myOtherFunctionX);

function myFunctionX(){
  x.style.color = 'red';
}

function myOtherFunctionX(){
  x.style.color = 'black';
}

document.addEventListener('scroll', myFunctionY);

function myFunctionY(){
  document.body.style.backgroundColor = 'yellow';
}

document.addEventListener('dblclick', myFunctionZ);

function myFunctionZ(){
  document.body.style.backgroundColor ='white';
}



  document.addEventListener('keydown', myFunctionA);
  function myFunctionA(){
    document.body.style.backgroundColor= "red";
  }



 //});
 window.addEventListener("resize", function(){
  document.querySelector("a").style.fontSize = 'xx-large';
});

window.addEventListener("load", function(){
 document.querySelector(".logo-heading").style.color = 'green';

});




window.addEventListener("click", function(event){
 document.body.style.backgroundColor= 'purple';

});

const p = document.querySelector('.content-section');
p.addEventListener(click, myFunctionP);
function myFunctionP(){
  event.stopPropagation();
  p.style.backgroundColor= 'white';
}

const h = document.querySelector('a');
h.addEventListener('click', myFunctionH);
function myFunctionH(event){
  event.preventDefault();
}
