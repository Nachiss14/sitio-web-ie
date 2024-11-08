let squares = [];
let numSquares = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Inicializar los cuadrados
  for (let i = 0; i < numSquares; i++) {
    let size = random(20, 80); // Tamaño aleatorio de los cuadrados
    let x = random(width);     // Posición inicial aleatoria en X
    let y = random(height);    // Posición inicial aleatoria en Y
    let speed = random(0.5, 2); // Velocidad de rotación y movimiento
    squares.push(new Square(x, y, size, speed));
  }

  noFill(); //sin relleno
}

function draw() {
  background(0);

  // Mover y dibujar cada cuadrado
  for (let square of squares) {
    square.update();
    square.display();
  }

  // Espirales central con degradado
  drawSpirals();
}

// Clase Square para manejar los cuadrados en movimiento y su efecto similar al espiral
class Square {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.angle = random(360); // Ángulo inicial aleatorio
  }

  update() {
    // Movimiento horizontal de un lado a otro
    this.x += sin(frameCount * this.speed) * 2;

    // Rotación continua
    this.angle += this.speed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // Dibujar líneas internas simulando un efecto de espiral de los cuadrados
    stroke(255);
    strokeWeight(0.5);
    noFill();

    // Similar a los vértices de la espiral pero en forma de cuadrado
    for (let i = 0; i < 360; i += 60) { //separacion lineas internas
      let currentSize = map(sin(frameCount * 0.5 + i), -1, 1, this.size * 0.2, this.size *1.2);

      beginShape();
      for (let angle = 0; angle < 360; angle += 90) { //forma de los objetos
        let x = (currentSize / 2) * cos(angle + frameCount / 2); // Movimiento curvado estilo reloj
        let y = (currentSize / 2) * sin(angle) + sin(angle + frameCount / 3) * 20; // Similar al movimiento del espiral
        vertex(x, y);
      }
      endShape(CLOSE);
    }

    pop();
  }
}

// Función para dibujar espirales con degradado, objeto principal
function drawSpirals() {
  translate(width / 2, height / 2);

  // Colores degradado
  let startColor = color(0);  // Color inicial (negro)
  let endColor = color(255);  // Color final (blanco)

  // Bucle principal para las espirales
  for (let i = 0; i < 360; i += 20)  {//separacion de las lineas internas
    let currentRadius = map(sin(frameCount * 0.5 + i), -1, 1, 50, 200); // Variación del radio
    let lerpAmt = map(i, 0, 360, 0, 1);  // Proporción para el degradado
    let currentColor = lerpColor(startColor, endColor, lerpAmt);  // Degradado en el ciclo
    
    stroke(currentColor);
    strokeWeight(2);  // Ensanchar las líneas del espiral
    
    beginShape();
    // Dibujo de los vértices de la espiral
    for (let angle = 0; angle < 360; angle += 130) { //forma obj principal
      let x = currentRadius * cos(angle + frameCount / 2); // Movimiento curvado estilo reloj
      let y = currentRadius * sin(angle) + sin(angle + frameCount / 3) * 105; // Define el ángulo de las líneas y el grado 2d
      vertex(x, y);  // Define los vértices de la espiral
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

