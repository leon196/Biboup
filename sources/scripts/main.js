
var canvasElement = document.getElementById("container");
var timeStarted = new Date() / 1000;
var timeElapsed = 0;
var draw = new Draw();

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

document.body.onload = init
