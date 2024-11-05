let data;

function preload() {
  data = loadTable("assets/data.csv");
}
function setup() {
  createCanvas(400, 400);

  console.log(data);
}

function draw() {
  background(220);
}
