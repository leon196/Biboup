
var Player = function ()
{
  this.x = canvasElement.width / 2;
  this.y = canvasElement.height / 2;
  this.size = 200;
  this.speedMove = 5;

  this.update = function ()
  {
    if (keyRight) {
      this.x += this.speedMove;
    } else if (keyLeft) {
      this.x -= this.speedMove;
    }
    if (keyUp) {
      this.y -= this.speedMove;
    } else if (keyDown) {
      this.y += this.speedMove;
    }

    // Borders collision
    this.x = Math.min(canvasElement.width, Math.max(0, this.x));
    this.y = Math.min(canvasElement.height, Math.max(0, this.y));
  };

  this.draw = function ()
  {
    draw.box(this.x, this.y, this.size, this.size, "#4444cd");
  };
};
