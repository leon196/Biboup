
var Draw = function ()
{
  this.canvasElement = document.getElementById("container");
  this.context2d = this.canvasElement.getContext("2d");

  this.clear = function ()
  {
    this.context2d.beginPath();
    this.context2d.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  this.box = function (x, y, width, height, color)
  {
    this.context2d.fillStyle = color;
    this.context2d.fillRect(x, y, width, height);
  };

  this.circle = function (x, y, radius, color)
  {
    this.context2d.fillStyle = color;
    this.context2d.arc(x, y, radius, 0, 2*Math.PI);
    this.context2d.fill();
  };

  this.line = function (x1, y1, x2, y2, color, lineWidth)
  {
    this.context2d.strokeStyle = color;
    this.context2d.beginPath();
    this.context2d.moveTo(x1, y1);
    this.context2d.lineTo(x2, y2);
    this.context2d.stroke();
  };
};
