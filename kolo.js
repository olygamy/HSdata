function Kolo (x, y, size, col) {
  this.x = x;
  this.y = y;
  this.col=col;
  this.size=size;



  this.display = function() {
    noStroke();
    
    fill(this.col);
    ellipse(this.x, this.y, size, size);
  }
}
