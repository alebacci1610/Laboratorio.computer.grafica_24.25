let canvasXmax=600;
let canvasYmax=600;
//voglio lo sfondo  grigio

function setup() {
  createCanvas(canvasXmax,canvasYmax );
  
}

function draw() {
  //background (220); se l'avessimo messo ricreava il background ogni volta
  textSize(15);
  let string_toprint="Mouse x="+mouseX+", y="+mouseY+";";
  // text(string_toprint, 20, 20);
  strokeWeight(3);
  line(0,mouseX,canvasXmax,mouseY);
  //feedback tasto mouse sx
  //disegnare la linea gialla se schiacciamo il mouse
  // p5 ha la qulità di avere la funzione true--> se il mouse è premuto, altrimenti false.
  if (mouseIsPressed == true){
    if (mouseButton == RIGHT){
      background(220);
    }
      stroke("pink");
  }else{
    stroke("black");
    //altrimenti se non è premuto il mouse, coloriamo di nero
  }
  


}
