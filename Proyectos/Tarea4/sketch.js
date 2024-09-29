function setup() {
  createCanvas(400, 400);  
  angleMode(DEGREES);     
}

function draw() {
  background(0);                  
  translate(width / 2, height / 2);

  let length = map(mouseX, 0, width, 20, 100); //longitud del tronco según la posición X del mouse
  let angle = map(mouseY, 0, height, -45, 45); //ángulo de las ramas según la posición Y del mouse

  drawBranch(length, angle);        // Llama a la función recursiva
}

function drawBranch(length, angle) {
  if (length > 5) { 
    stroke(255);                
    line(0, 0, 0, -length);      // Dibuja la línea del tronco
    translate(0, -length);       // Mueve el origen al final del tronco

    push(); 
    rotate(angle); 
    drawBranch(length * 0.7, angle); //dibuja la rama izquierda
    pop(); 

    push(); 
    rotate(-angle); //dirección opuesta
    drawBranch(length * 0.7, angle); //dibuja la rama derecha
    pop(); 
  }
}