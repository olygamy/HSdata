var  a=0;

function Kolo (x, y, size, col, alfa) {
  this.x = x;
  this.y = y;
  this.col=col;
  this.size=size;

  this.alfa=alfa;


  this.display = function() {
    noStroke();
    
    fill(this.col, this.alfa);
    ellipse(this.x, this.y, size, size);
  }


  this.update = function(colb, a, newsize) {
    this.alfa=a;
    this.col=colb;
    this.size=newsize;
  // a=a+1;
  //   if (a >255){
  //     a=255;
  //   }
    fill(colb,a);
  }


}
