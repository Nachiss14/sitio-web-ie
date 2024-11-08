let img;
let size = 10;
let asciiChar = "%#@{,;";

function preload() {
  img = loadImage("conejovector.jpg"); 
}

function setup() {
  createCanvas(400, 400);
  img.resize(100, 0); // Redimensiona la imagen
  size = width / img.width;
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // Fondo negro para resaltar el contraste
  
  img.loadPixels(); // Cargar los píxeles de la imagen
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let pixelIndex = (i + j * img.width) * 4;
      let r = img.pixels[pixelIndex + 0];
      let g = img.pixels[pixelIndex + 1];
      let b = img.pixels[pixelIndex + 2];

      // Calcular el brillo del píxel
      let bright = (r + g + b) / 3; // Promedio de brillo
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length)); // Mapear el brillo a un índice de carácter
      let t = asciiChar.charAt(tIndex); // Obtener el carácter ASCII correspondiente

      // Definir la posición de cada carácter
      let x = i * size + size / 2;
      let y = j * size + size / 2;
      
      // Ajustar el color de violeta a azul basado en el brillo
      let gradientColor = color(map(bright, 0, 255, 128, 255), map(bright, 0, 255, 0, 128), 255);
      fill(gradientColor);

      // Aplicar desenfoque gradual: cambiar el tamaño del texto según el brillo
      let textSizeFactor = map(bright, 0, 255, 1.5, 0.5); // Tamaño pequeño para zonas claras, más grande en zonas oscuras
      textSize(size * textSizeFactor);

      // Aplicar rotación a los caracteres basados en el brillo
      push();
      translate(x, y);
      rotate(radians(map(bright, 0, 255, -90, 90))); // Rotar entre -45° y 45° basado en el brillo
      text(t, 0, 0); // Dibujar el carácter rotado en su posición
      pop();
    }
  }
}
