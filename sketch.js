
var kolos = [];
al=0;
s=20;
function setup() {
   createCanvas(800, 600);
 for (var i = 0; i < 3; i++) {
    kolos[i] = new Kolo(width / 3 + i * 33, height - 300, 10, color(200));
  }
  
}

function draw() {
  
  background(255);
   for (var i = 0; i < kolos.length; i++) {
   
    kolos[i].display();

  }
  
   if (mouseIsPressed) {
   al = al + 1;
  if (al > 255) {
    al = 255;
  }
  s = s + 0.1;
  if (s > 40) {
    s = 40;
  }
  fill(0,al);
    ellipse(50, 50, s, s);
    
   }
   else {
     al=0;
     s=20;
   }
  
}
