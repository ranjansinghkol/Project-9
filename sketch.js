window.alert("Note: To Change Color, you need to use a computer or laptop, because you need keyboard, Press Arrow keys to change colors");

function setup(){
  createCanvas(600, 600);
}

function draw(){
  background("black");
  if(keyIsDown(UP_ARROW)){
    background("red");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("green");
    
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("yellow");
  }
}