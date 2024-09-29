function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  
  //Colores degradado
  let startColor = color(255, 0, 150);  //color inicial (rosa)
  let endColor = color(0, 150, 255);    //color final (azul)
  
  //bucle principal para las espirales y cantidad de ellas
  for (let i = 0; i < 360; i += 20) {
    
    let currentRadius = map(sin(frameCount * 0.5 + i), -1, 1, 50, 200); // Variación del radio
    let lerpAmt = map(i, 0, 360, 0, 1);  // Proporción para el degradado
    let currentColor = lerpColor(startColor, endColor, lerpAmt);  // Degradado en el ciclo
    
    stroke(currentColor);  //cambia el color de la espiral actual
    
    beginShape();
    //dibuja los vértices, rotando cada vez
    for (let angle = 0; angle < 360; angle += 45) {
      let x = currentRadius * cos(angle + frameCount / 2); //movimiento curvado estilo reloj
      let y = currentRadius * sin(angle) + sin(angle + frameCount / 3) * 50; //define el angulo de las lineas 
      vertex(x, y);  //define los vértices de la espiral
    }
    endShape(CLOSE);
  }
}