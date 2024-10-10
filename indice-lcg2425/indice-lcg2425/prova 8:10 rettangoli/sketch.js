function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop()
  frameRate(7)
  padding = 10
}

function draw() {
  background("#3c3b4c");
  fill("lightblue");
  let rectWidth = 11;
  let rectHeight = 25;
  let spacing = 5;
  let topMargin = 10
  let sideMargin = 20
  let bottomMargin = 10
  //rect (10,10,rectWidth,rectHeight)
  let colums = (windowWidth-sideMargin)/(rectWidth+spacing)
  let rows = (windowHeight-topMargin-bottomMargin)/(rectHeight+spacing)
  
  for (let i = 0; i < colums; i++) {
    for (let j = 0; j < rows; j++) {
      let xPos = sideMargin/2 + i * (rectWidth+spacing) + random (-2.5,2.5)
      let yPos = topMargin + j * (rectHeight+spacing) + random (-2.5,2.5)
      rect(xPos, yPos, rectWidth, rectHeight) ;

  }
    
  }
}
