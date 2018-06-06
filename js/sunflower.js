//sunflower seed animation -- needs fixing
var seed = document.getElementById ("seed");

window.onscroll = function(){

  console.log("Sunflower Seed");

  var fromTop = window.pageYOffset;

  console.log(fromTop);

  seed.innerHTML = fromTop + "px";

  seed.style.top = fromTop * 1.1 + "px";

  //seed.style.transform = "rotate("+ fromTop +"deg)";

  if(fromTop > 5000){
    seed.style.transform = "rotate(0 deg)";
    seed.innerHTML = "what a ride!"
    }else{
      seed.style.transform = "rotate("+ fromTop +"deg)";
    }

}
