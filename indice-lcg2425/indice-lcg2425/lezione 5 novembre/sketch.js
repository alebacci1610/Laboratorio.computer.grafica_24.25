let food; // Variabile per il cibo

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  snake = new Snake(200, 200);
  food = createFood(); // Crea il cibo iniziale
}

function draw() {
  background(220);
  snake.show();
  snake.update();
  if (snake.eat(food)) { // Controlla se lo Snake mangia il cibo
    food = createFood(); // Crea un nuovo cibo
  }
  fill(255, 0, 0);
  ellipse(food.x, food.y, 10, 10); // Disegna il cibo
}

class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tail = [];
    this.direction = 'NONE';
    this.speedX = 0;
    this.speedY = 0;
  }

  show() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 10, 10);
    }
    rect(this.x, this.y, 10, 10);
  }

  update() {
    if (this.direction !== 'NONE') {
      let tail = { x: this.x, y: this.y };
      this.tail.push(tail);
      if (this.tail.length > 10) {
        this.tail.shift();
      }

      this.x += this.speedX;
      this.y += this.speedY;

      // Controlla se lo Snake esce dai confini
      if (this.x < 0 || this.x >= width || this.y < 0 || this.y >= height) {
        noLoop(); // Ferma il gioco
        alert("Hai perso!"); // Messaggio di perdita
      }
    }
  }

  eat(food) {
    if (this.x === food.x && this.y === food.y) {
      this.tail.push({ x: this.x, y: this.y }); // Aggiungi un quadrato alla coda
      return true; // Indica che il cibo è stato mangiato
    }
    return false; // Indica che il cibo non è stato mangiato
  }
}

// Funzione per creare cibo in posizioni casuali
function createFood() { 
  let cols = floor(width / 10);
  let rows = floor(height / 10);
  let foodX = floor(random(cols)) * 10;
  let foodY = floor(random(rows)) * 10;
  return { x: foodX, y: foodY };
}

// ... codice esistente per keyPressed ...

function keyPressed() {
  if (keyCode === UP_ARROW && snake.direction !== 'DOWN') {
    snake.direction = 'UP';
    snake.speedX = 0;
    snake.speedY = -10;
  } else if (keyCode === DOWN_ARROW && snake.direction !== 'UP') {
    snake.direction = 'DOWN';
    snake.speedX = 0;
    snake.speedY = 10;
  } else if (keyCode === LEFT_ARROW && snake.direction !== 'RIGHT') {
    snake.direction = 'LEFT';
    snake.speedX = -10;
    snake.speedY = 0;
  } else if (keyCode === RIGHT_ARROW && snake.direction !== 'LEFT') {
    snake.direction = 'RIGHT';
    snake.speedX = 10;
    snake.speedY = 0;
  }
}