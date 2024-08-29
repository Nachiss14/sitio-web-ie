function setup() {
  createCanvas(350, 300);
}

function draw() {
  background(0);
  
//sector superior iz
strokeWeight(1)
fill('orange');
stroke('orange');
rect (25, 30, 30, 30) //rectangulo pequeño
rect (40, 45, 40, 45) //rectangulo 2
rect (60, 65, 60, 65) //rectangulo 3
  //lineas cuadrados
  strokeWeight(1)
  noFill();
  stroke (0);
  rect (35, 20, 30, 30) //rectangulo pequeño'
  rect (50, 35, 40, 45) //rectangulo 2'
  rect (70, 75, 60, 65) //rectangulo 3'
  rect (15, 10, 30, 30) //rectangulo pequeño''
  rect (30, 25, 40, 45) //rectangulo 2''
  rect (45, 55, 60, 65) //rectangulo 3''
 
//sector superior der
strokeWeight(1)
fill('yellow');
stroke(0);
rect (285, 30, 30, 30) //rectangulo pequeño'
rect (260, 45, 40, 45) //rectangulo 2'  
rect (220, 65, 60, 65) //rectangulo 3'
  //linea cuadrados
  strokeWeight(1)
  noFill();
  stroke (0);
  rect (275, 25, 30, 30) //rectangulo pequeño'
  rect (250, 30, 40, 45) //rectangulo 2'  
  rect (210, 55, 60, 65) //rectangulo 3'
  rect (285, 40, 20, 20) //rectangulo pequeño''
  rect (250, 30, 40, 45) //rectangulo 2''
  rect (230, 45, 60, 65) //rectangulo 3''
  
//sector inferior iz
strokeWeight(1)
fill('yellow');
stroke(0);
rect (25, 230, 30, 30) //rectangulo pequeño
rect (40, 200, 40, 45) //rectangulo 2
rect (60, 160, 60, 65) //rectangulo 3
  //lineas cuadrados
  strokeWeight(1)
  noFill();
  stroke (0)
  rect (15, 220, 20, 20) //rectangulo pequeño'
  rect (25, 190, 30, 35) //rectangulo 2'
  rect (50, 150, 50, 55) //rectangulo 3'
  rect (30, 235, 20, 20) //rectangulo pequeño''
  rect (45, 200, 30, 35) //rectangulo 2''
  rect (80, 165, 50, 55) //rectangulo 3''
  
//sector inferior der
strokeWeight(1)
fill('orange');
stroke('orange');
rect (285, 230, 30, 30) //rectangulo pequeño
rect (260, 200, 40, 45) //rectangulo 2  
rect (220, 160, 60, 65) //rectangulo 3
  //lineas cuadrados
  strokeWeight(1)
  noFill();
  stroke (0);
  rect (265, 210, 30, 30) //rectangulo pequeño'
  rect (250, 230, 40, 45) //rectangulo 2'  
  rect (210, 180, 60, 65) //rectangulo 3'
  rect (265, 250, 30, 30) //rectangulo pequeño''
  rect (280, 270, 40, 45) //rectangulo 2''
  rect (240, 190, 60, 65) //rectangulo 3''
  
strokeWeight(1)
fill(0);
stroke(0);
rect (90, 100, 160, 90) //rectangulo en medio

stroke('green');
strokeWeight(1)
line (170, 260, 170, 30) // linea vertical
line (20, 145, 315, 145) // linea horizontal
  
  fill('green');
ellipse (20, 145, 20, 20) // circulo pequeño iz
ellipse (315, 145, 20, 20) // circulo pequeño der
ellipse (170, 30, 20, 20) // circulo pequeño up
ellipse (170, 260, 20, 20) // circulo pequeño down
  fill (0)
  stroke (0)
ellipse (30, 145, 10, 10) // circulo pequeño iz'
ellipse (305, 145, 10, 10) // circulo pequeño der'
ellipse (170, 40, 10, 10) // circulo pequeño up'
ellipse (170, 250, 10, 10) // circulo pequeño down'
  

  fill (250)
  stroke (250)
ellipse (170, 145, 20, 20) // circulo pequeño centro
line (140, 140, 170, 140) // linea 0
line (140, 135, 170, 135) // linea 1
line (141, 130, 170, 130) // linea 2
line (143, 125, 170, 125) // linea 3
line (144, 120, 170, 120) // linea 4
line (146, 115, 170, 115) // linea 5
line (149, 110, 170, 110) // linea 6
line (152, 105, 170, 105) // linea 7
line (156, 100, 170, 100) // linea 8
line (161, 95, 170, 95) // linea 9

line (170, 150, 200, 150) // linea 6
line (170, 155, 200, 155) // linea 7
line (170, 160, 197, 160) // linea 0
line (170, 165, 196, 165) // linea 1
line (170, 170, 194, 170) // linea 2
line (170, 175, 193, 175) // linea 3
line (170, 180, 191, 180) // linea 4
line (170, 185, 188, 185) // linea 5
line (170, 190, 184, 190) // linea 8
line (170, 195, 180, 195) // linea 9
  
  
noFill();
stroke('#716ad6');
strokeWeight(2)
ellipse (210, 145, 140, 140) // circulo derecha
ellipse (130, 145, 140, 140) // circulo izquierda
}