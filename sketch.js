var garment;

function setup() {
  createCanvas(500,550);
  loadJSON("http://www.lifthoofd.nl/hsmap/dev01/pm_data.json", gotData, 'jsonp');
}

function gotData(data){
  println(data);
  garment = data;
}

function draw() {
  if (garment){
    fill(0);
    rect(130,130, garment.garment07, 10);
  }
}
