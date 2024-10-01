function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //vogliamo disegnare la luna
  fill("yellow");
  stroke("white");
  strokeWeight(5);
  circle(300,75,100);
  //prima della forma desiderata dobbiamo cambiare i parametri di fill e stroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(3);
  rect (0,200,400,200);
  fill ("white");
  stroke (0);
  strokeWeight(1);
  text("C'era una volta...",200,350);
}