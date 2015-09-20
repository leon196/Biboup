
var canvasElement = document.getElementById("container");
var timeStarted = new Date() / 1000;
var timeElapsed = 0;
var draw = new Draw();

function init ()
{
  // Set fullscreen
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  // Start main loop
  requestAnimationFrame(update);
}

function update ()
{
  timeElapsed = new Date() / 1000 - timeStarted;

  draw.Clear();

  var x = canvasElement.width / 2 + Math.sin(timeElapsed) * canvasElement.width / 4;
  draw.Circle(x, canvasElement.height / 2, 100, "#ff403c");

  // Maintain loop
  requestAnimationFrame(update);
}

document.body.onload = init
