let canvasXMax=600, canvasYMax=600;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  slider=createSlider(0, 255, 0, 1);
  //i parametri sono il valore minimo, il valore massimo, il valore iniziale e lo step
  slider.position(0,canvasYMax-60);
  slider.size(200);

}
function draw() {
  background("navy");
  //
  frameRate(15);
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  moonXpos=moonXpos+1
  //condizionalmente se la luna esce dai bordi 
  if(moonXpos>canvasXMax){
    moonXpos=0
  }

  //recuperare il metodo 2 


  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  let left_corner= y-house_height;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
    x_casa=0;
    let sliderValue=slider.value();
  //rollover --> agiamo se passiamo sopra la stella
  if((mouseX>x_casa) && (mouseX<x_casa+house_width) && (mouseY>left_corner) && (mouseY<left_corner+house_height)){
    fill(sliderValue);
    rect(x_casa, y-house_height , house_width, house_height);
  } else {
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
  }
  let xStar=0;
  let yStar=0;
  //voglio disegnare stelle random
  for(let numero_stelle=0; numero_stelle<5; numero_stelle++){
    colorMode(HSB, 360, 100, 100); // Imposta il modo colore su HSB
  let hue = random(0, 60); // Valore casuale tra 0 (rosso) e 60 (giallo)
  stroke(hue, 100, 100); //colori randomici
    strokeWeight(random(5,30));
    point (xStar,yStar)
    xStar=random(0,canvasXMax);
    yStar=random(0,canvasYMax/2);
  }
  //if (frameCount ==50 )
    //noLoop



  //displays the x and y position of the mouse on the canvasstroke("white");
    strokeWeight(1);
    fill(255);//white text
    textSize(50)
    text(frameCount);
}
