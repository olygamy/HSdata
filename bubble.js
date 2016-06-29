function Bubble(x, y, col) {
  this.x = x;
  this.y = y;
  this.col=col;



  this.display = function() {
    noStroke();
    
    fill(this.col);
    ellipse(this.x, this.y, 10, 10);
  }
}

}
