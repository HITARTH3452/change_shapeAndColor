var color = [
    "red",
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
  ];
  var index = 0;
  var isTriangle = false;

let changeShape = document.getElementsByClassName("btn1")[0];
let changeColor = document.getElementsByClassName("btn2")[0];

changeShape.addEventListener("click" , cShape);
changeColor.addEventListener("click", cColor);

function cColor() {
    if(index === color.length){
        index = 0;
    }
    document.getElementsByClassName("color")[0].style.backgroundColor = color[index];
    index++;
}

function cShape() {
    if(!isTriangle){
        var curShape = document.getElementsByClassName("shape")[0];
        curShape.classList.add("triangle-bottom-left");
        isTriangle = true;
    }else{
        var curShape = document.getElementsByClassName("triangle-bottom-left")[0];
        curShape.classList.remove("triangle-bottom-left");
        // curShape = "shape";
        isTriangle = false;
    }
}