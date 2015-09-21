
var canvasElement = document.getElementById("container");
var timeStarted = new Date() / 1000;
var timeElapsed = 0;
var draw = new Draw();
var mouse = { x: 0, y: 0 };
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;

function init ()
{
  // Set fullscreen
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  // Events
  canvasElement.addEventListener('mousedown', onMouseDown);
  canvasElement.addEventListener('mouseup', onMouseUp);
  canvasElement.addEventListener('mousemove', onMouseMove);
  document.addEventListener("keydown", onKeyDown);
	document.addEventListener("keyup", onKeyUp);

  // Start main loop
  requestAnimationFrame(update);
}

function update ()
{
  timeElapsed = new Date() / 1000 - timeStarted;

  draw.clear();

  draw.box(0, 0, canvasElement.width, canvasElement.height, "#3f3f3c");
  draw.circle(mouse.x, mouse.y, 100, "#ff403c");

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

function onKeyDown (event)
{

}

function onKeyUp (event)
{
  console.log(String.fromCharCode(event.keyCode) + ' : ' + event.keyCode);
}

document.body.onload = init
