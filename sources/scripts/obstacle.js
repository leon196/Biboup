
var Obstacle = function ()
{
  this.x = canvasElement.width / 4;
  this.y = canvasElement.height / 2;
  this.size = 60;

  this.direction = { x: 1, y: 0 };
  this.speed = 2;

  this.timeCollisionStart = 0;
  this.timeCollisionDelay = 1;

  this.lifeMax = 10;
  this.life = this.lifeMax;

  this.getSize = function ()
  {
    return Math.max(0, this.size * (this.life / this.lifeMax));
  }

  this.startAnimation = function ()
  {
    this.timeCollisionStart = timeElapsed;
  }

  this.update = function ()
  {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;

    if (this.timeCollisionStart + this.timeCollisionDelay > timeElapsed)
    {
      var ratio = (timeElapsed - this.timeCollisionStart) / this.timeCollisionDelay;
      this.size = 60 + Math.sin(ratio * 10) * 5 * (1 - ratio)
    }
  }

  this.isOutOfScreen = function ()
  {
    return this.x < -this.size || this.x > canvasElement.width + this.size || this.y < -this.size || this.y > canvasElement.height + this.size;
  }

  this.draw = function ()
  {
    draw.circle(this.x, this.y, this.getSize(), "#0044cd");
  }

  this.circleCollision = function (x_, y_, radius)
  {
    var x = (x_ - this.x)
    var y = (y_ - this.y)
    var dist = Math.sqrt(x*x+y*y);
    return dist - radius - this.getSize() < 0;
  }
}
