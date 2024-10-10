let xsize = 400;
let ysize = 400;
function setup() {
  createCanvas(xsize, ysize);
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
  //ordine in p5
  stroke ("yellow");
  strokeWeight(40);
  let ystars_primordiale = 10;
  let xstars_primordiale= 10;
  
  point(xstars_primordiale,ystars_primordiale);
  let passo=5;
  //for(init; test; update){corpo}
  for (let i=0; i<50; i = i+passo) {
    if(i%2==0) {
      //corpo di ramo vero
      stroke ("yellow");
    } else {
      //altrimenti questo 
      stroke ("white");
    }
    strokeWeight (i*0.5)
    point (xstars_primordiale*i, ystars_primordiale+i);
    
  }
  fill ("white");
  stroke (0);
  strokeWeight(1);
  textSize(20)
  text("C'era una volta...",200,350);
  
  let xsquare=10
  let ysquare=130
  let ssquare=70

  fill ("red")
  square(xsquare,ysquare,ssquare)

  let x1triangle=10
  let x2triangle=80
  let x3triangle=40
  let y1triangle=130
  let y2triangle= 130
  let y3triangle=60
  fill ("black")
  triangle(x1triangle,y1triangle,x2triangle,y2triangle,x3triangle,y3triangle)
}
