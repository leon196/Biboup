
var mouse = { x: 0, y: 0 };
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;

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
