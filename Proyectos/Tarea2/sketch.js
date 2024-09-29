function setup() {
  createCanvas(600, 400);
  fill('#482d4d');
}

function draw() {
  background('#428aa3');  // Fondo 
  
  let waveHeight = 100;  // Altura máxima de las ondas
  let waveFrequency = 0.02;  // Velocidad de las ondas
  let numWaves = 10;  // Cantidad 
  
  // Array de colores para el degradado
  let startColor = color('#effd44'); 
  let endColor = color('#09f076');   
  
  for (let i = 0; i < numWaves; i++) {
    let lerpAmt = map(i, 0, numWaves - 1, 0, 1); 
    let currentColor = lerpColor(startColor, endColor, lerpAmt); 
    
    stroke(currentColor); 
    
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let yOffset = sin(x * waveFrequency + frameCount * 0.05) * waveHeight;  
      vertex(x, height / numWaves * i + yOffset);
    }
    endShape();
  }
}
