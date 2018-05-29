//sunflower seed animation -- needs fixing
var seed = document.getElementById ("seed");

window.onscroll = function(){

  console.log("yo yo yo");

  var fromTop = window.pageYOffset;

  console.log(fromTop);

  submarine.innerHTML = fromTop + "px";

  submarine.style.top = fromTop * 1.1 + "px";

  //submarine.style.transform = "rotate("+ fromTop +"deg)";

  if(fromTop > 5000){
    submarine.style.transform = "rotate(0 deg)";
    submarine.style.backgroundColor = "red";
    submarine.innerHTML = "what a ride!"
    }else{
      submarine.style.transform = "rotate("+ fromTop +"deg)";
    }

}
