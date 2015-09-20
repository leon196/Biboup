
document.body.onload = function ()
{
  // The canvas DOM element
  var canvasElement = document.getElementById("container");

  // Set fullscreen
  canvasElement.width = window.innerWidth
  canvasElement.height = window.innerHeight

  // The canvas context 2d
  var context2d = canvasElement.getContext("2d");

  // Background color
  context2d.fillStyle = "#ff9640";
  // Fill screen (x, y, width, height)
  context2d.fillRect(0, 0, canvasElement.width, canvasElement.height);

  context2d.lineWidth = 4;

  // Circle
  context2d.strokeStyle = "#009640";
  context2d.beginPath();
  // arc(x, y, radius, starting angle, ending angle)
  context2d.arc(canvasElement.width/2, canvasElement.height/2, 100, 0, 2*Math.PI);
  context2d.stroke();

  // Box
  context2d.strokeStyle = "#008096";
  // strokeRect(x, y, width, height)
  context2d.strokeRect(canvasElement.width/4, canvasElement.height/4, canvasElement.width/2, canvasElement.height/2);

  // Shape
  context2d.strokeStyle = "#ff3640";
  context2d.beginPath();
  var radius = 120;
  context2d.moveTo(canvasElement.width/2 + radius, canvasElement.height/2);
  for (var i = 1; i <= 32; ++i) {
    var angle = (i / 32) * Math.PI * 2;
    var offset = i % 2 == 1 ? 30 : 0;
    var x = canvasElement.width / 2 + Math.cos(angle) * (radius + offset);
    var y = canvasElement.height / 2 + Math.sin(angle) * (radius + offset);
    context2d.lineTo(x, y);
  }
  context2d.stroke();
}
