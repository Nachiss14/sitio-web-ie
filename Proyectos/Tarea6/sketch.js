let particles = [];

function setup() {
  createCanvas(600, 400);
  background(0);
  
  // Crear 50 partículas iniciales
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 25);
  
  // Actualizar y mostrar las partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    
    // Eliminar las partículas que se han desvanecido
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
  
  // Crear nuevas partículas basadas en la posición del mouse
  if (particles.length < 100) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y); // Posición inicial
    this.vel = p5.Vector.random2D(); // Velocidad aleatoria
    this.acc = createVector(0, 0); // Aceleración inicial en 0
    this.alpha = 255; // Transparencia máxima
    this.r = random(5, 10); // Radio aleatorio para la partícula
  }
  
  finished() {
    return this.alpha < 0;
  }
  
  update() {
    // Atraer o repeler las partículas dependiendo de la posición del mouse
    let mouse = createVector(mouseX, mouseY);
    let force = p5.Vector.sub(mouse, this.pos); // Fuerza de atracción o repulsión
    let d = force.mag();
    
    if (d < 100) { // Si está cerca del mouse, repeler
      force.mult(-0.05);
    } else { // Si está lejos, atraer
      force.mult(0.02);
    }
    
    this.acc.add(force); // Aplicar la fuerza
    this.vel.add(this.acc); // Actualizar velocidad
    this.pos.add(this.vel); // Actualizar posición
    this.acc.mult(0); // Resetear la aceleración
    this.alpha -= 3; // Reducir la transparencia
  }
  
  display() {
    noStroke();
    fill(255, this.alpha); // Relleno blanco con transparencia
    ellipse(this.pos.x, this.pos.y, this.r * 2); // Dibujar partícula
  }
}
