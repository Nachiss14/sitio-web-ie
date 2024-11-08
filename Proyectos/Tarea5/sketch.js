let triangles = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  // Crear múltiples objetos de tipo triángulo
  for (let i = 0; i < 5; i++) {
    triangles.push(new TriangleShape(random(width), random(height)));
  }
}

function draw() {
  background(92, 95, 171); // Fondo lila azulado
  
  // Mostrar y actualizar triángulos
  for (let triangle of triangles) {
    triangle.update();
    triangle.display();
  }
}

// Clase para los triángulos que giran en su eje y se mueven
class TriangleShape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 60); // Tamaño aleatorio
    this.angle = random(360); // Ángulo inicial
    this.rotationSpeed = random(1, 3); // Velocidad de rotación
    this.xSpeed = random(1, 3); // Velocidad de movimiento en X
    this.ySpeed = random(1, 3); // Velocidad de movimiento en Y
    this.color = color(random(140, 180), random(150, 190), random(200, 240)); // Paleta de colores similar al fondo
  }
  
  update() {
    // Movimiento
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // Rebotar en los bordes
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
    
    // Rotación
    this.angle += this.rotationSpeed;
  }
  
  display() {
    fill(this.color);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    triangle(-this.size / 2, this.size / 2, 0, -this.size / 2, this.size / 2, this.size / 2);
    pop();
  }
}
