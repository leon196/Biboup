
var canvasElement = document.getElementById("container");
var timeStarted = new Date() / 1000;
var timeElapsed = 0;
var draw = new Draw();
var mouse = { x: 0, y: 0 };

function init ()
{
  // Set fullscreen
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  // Events
  canvasElement.addEventListener('mousedown', onMouseDown);
  canvasElement.addEventListener('mouseup', onMouseUp);
  canvasElement.addEventListener('mousemove', onMouseMove);

  // Start main loop
  requestAnimationFrame(update);
}

function update ()
{
  timeElapsed = new Date() / 1000 - timeStarted;

  draw.Clear();

  draw.Circle(mouse.x, mouse.y, 100, "#ff403c");

  // Maintain loop
  requestAnimationFrame(update);
}

function onMouseDown (event)
{

}

function onMouseUp (event)
{

}

function onMouseMove (event)
{
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

document.body.onload = init
