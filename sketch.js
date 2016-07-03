var kolos = [];
var coloring = [];
var pm;
var sA;
var sS;
var sD;
var keythinga = false;
var keythings = false;
var keythingd = false;
var fadeA;
var fadeS;
var fadeD;

var payload;

var mqtt;
          var reconnectTimeout = 100;
          

          host = "mqtt.opensensors.io"
          port = 443;
          topic = "/users/olygamy/test";        // topic to subscribe to
          username = "olygamy";          // Your OpenSensors user name
          password = "wMoWHbOH";          // Your OpenSensors password
          client_id = "4292";            // Your device's client id



function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 12; i++) {
    kolos[i] = new Kolo(width / 3 + i * 33, height - 300, 20, color(200));
  }
  

  coloring[0] = color(17, 186, 177);
  coloring[1] = color(16, 177, 75);
  coloring[2] = color(196, 216, 46);
  coloring[3] = color(241, 233, 18);
  coloring[4] = color(254, 188, 18);
  coloring[5] = color(248, 151, 29);
  coloring[6] = color(228, 110, 170);
  coloring[7] = color(238, 57, 115);
  coloring[8] = color(237, 31, 36);
  coloring[9] = color(174, 31, 35);
  coloring[10] = color(85, 15, 14);
  coloring[11] = color(0, 0, 0);
  coloring[12] = color(200);

  sA = 20;
  sS = 20;
  sD = 20;
  fadeA = false;
  fadeS = false;
  fadeD = false;
  
  

}



function MQTTconnect() {
  
  mqtt = new Paho.MQTT.Client(
  host, port, "/ws", client_id);
 
  var options = {
  timeout: 13,
  useSSL: true,
  keepAliveInterval: 10,
  onSuccess: onConnect,
  onFailure: function (message) {
  // console.log("Connection failed: " + message.errorMessage + "Retrying");
  // console.log(onMessageArrived);
  setTimeout(MQTTconnect, reconnectTimeout);
    }
  };
 
  mqtt.startTrace();
  mqtt.onConnectionLost = onConnectionLost;
  mqtt.onMessageArrived = onMessageArrived;
 
  options.userName = username;
  options.password = password;
 
  mqtt.connect(options);
}
 
function onConnect() {
  // console.log("Connected to " + host + ":" + port);
  // Connection succeeded; subscribe to our topic
  mqtt.subscribe(topic, {qos: 0});
  // mqtt.send(testMessage);
}
 
function onConnectionLost(response) {
  setTimeout(MQTTconnect, reconnectTimeout);
  // console.log("connection lost: " + response.errorMessage + ". Reconnecting");
}
 
function onMessageArrived(message) {
 
  payload = message. payloadString;
  // console.log(payload);
  // document.getElementById("demo").innerHTML = payload;
  // println(payload);
  message = messageArrived;
  // println(payload);
  return payload;
}


// function getData(pm) {

//   input = select('#pm25');
//   pm = input.value();
//   // println(pm);


//   return pm;
// }


function dataFlow() {
  
  println(payload);
 
 if (payload > 0 && payload <= 10) {
    keythinga = true;
    keythings = false;
    keythingd = false;
    fadeA = true;
    fadeS = false;
    fadeD = false;
    reset();
  }

  if (payload  > 10 && payload  <=20) {
    keythings = true;
    keythinga = true;
    keythingd = false;
    fadeA = false;
    fadeS = true;
    fadeD = false;
    reset();
  }
  if (payload  > 20 && payload  <=30) { 
    keythingd = true;
    keythinga = true;
    keythings = true;
    fadeA = false;
    fadeS = false;
    fadeD = true;
    reset();

  }
}

function fadein() {

  if (fadeA == true) {
    sA = sA + 1;
    if (sA > 40) {
      sA = 40;
    }
  }

  if (fadeS == true) {
    sS = sS + 1;
    if (sS > 40) {
      sS = 40;
    }
  }

  if (fadeD == true) {

    sD = sD + 1;
    if (sD > 40) {
      sD = 40;
    }
  }
}

function reset() {

if (sA = 40) {
   sA = 20;
  }

  if (sS = 40) {
    sS = 20;
  }

  if (sD = 40) {
    sD = 20;
   }
}

function draw() {

  background(255);
  for (var i = 0; i < kolos.length; i++) {
    kolos[i].display();

  }
  
  dataFlow();
  

  if (keythinga == true) {
    fadein();
    fill(0, 255);
    ellipse(50, 50, sA, sA);
    for (var i = 0; i < 1; i++) {
      kolos[i].update( coloring[i], sA);
    }

  }
  if (keythings == true) {
    fadein();
    fill(0, 255);
    ellipse(150, 50, sS, sS);
    for (var i = 1; i < 2; i++) {
      kolos[i].update( coloring[i], sS);
    }
  }

  if (keythingd == true) {
    fadein();
    fill(0, 255);
    ellipse(250, 50, sD, sD);

    for (var i = 2; i < 3; i++) {
      kolos[i].update( coloring[i], sD);
    }
  }
}

$(document).ready(function() {
  MQTTconnect();
});
