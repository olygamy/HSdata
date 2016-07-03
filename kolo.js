// var colb;
// var sizeb;

 var a = 0;
// var millisecond = millis();
 
function Kolo(x, y, size, col) {
  this.x = x;
  this.y = y;
  this.col = col;
  this.size = size;
 this.display = function() {

  noStroke();
  fill(this.col,a);
  ellipse(this.x, this.y, this.size, this.size);
  }

  this.update = function(colb, sizeb) {
   this.colb = colb;
    this.sizeb = sizeb;

    noStroke();
    fill(colb, a);
     ellipse(this.x, this.y, this.sizeb, this.sizeb);

  }

}
