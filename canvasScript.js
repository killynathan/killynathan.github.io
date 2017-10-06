window.onload = init();

function init() {
  var canvas = document.getElementById('c');
  var ctx = canvas.getContext('2d');
  var home = document.getElementById('home');

  canvas.width = home.offsetWidth;
  canvas.height = home.offsetHeight;

  var HEIGHT = canvas.height;
  var WIDTH = canvas.width;
  var PARTICLE_COUNT = 200;
  var PARTICLE_STARTING_RADIUS = 3;
  var X_ORIGIN = WIDTH / 2;
  var Y_ORIGIN = HEIGHT / 2;
  var MOVEMENT_RADIUS = HEIGHT / 7.5;
  var MOVEMENT_HEIGHT_FACTOR = 2;

  function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }

  function getNextPositiveYPosition(x) {
    var inner = (Math.pow(MOVEMENT_RADIUS, 2) - Math.pow(x - X_ORIGIN, 2) / MOVEMENT_RADIUS) / 0.3;
    return Math.sqrt(inner) + Y_ORIGIN;
  }

  function getNextNegativeYPosition(x) {
    var inner = (Math.pow(MOVEMENT_RADIUS, 2) - Math.pow(x - X_ORIGIN, 2) / MOVEMENT_RADIUS) / 0.3;
    return -1 * Math.sqrt(inner) + Y_ORIGIN;
  }

  function getNextYPosition(particle) {
    var x = particle.x;
    var inner = (Math.pow(MOVEMENT_RADIUS, 2) - Math.pow(x - X_ORIGIN, 2) / MOVEMENT_RADIUS) / 0.3;
    if (inner < 0) {
      particle.yPositive = !particle.yPositive;
    }
    if (particle.yPositive) return Math.sqrt(inner) + Y_ORIGIN;
    else return -1 * Math.sqrt(inner) + Y_ORIGIN;

  }

  var particles = {
    particles: [],
    addParticle: function() {
      var _x = Math.floor(Math.random() * WIDTH);
      var _y = getNextNegativeYPosition(_x);
      this.particles.push({
        x: _x,
        y: _y,
        z: _y - Y_ORIGIN,
        yPositive: (Math.random() > 0.5 ? false : true),
        yOffset: Math.floor(Math.random() * 21) - 10,
        radius: PARTICLE_STARTING_RADIUS
      });
    },
    update: function() {
      for (var i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i];
        if (!particle.yPositive) {
          particle.x += 8;
          particle.y = getNextYPosition(particle) + particle.yOffset;

        }
        else {
          particle.x -= 8;
          particle.y = getNextYPosition(particle) + particle.yOffset;
        }
        particle.z = particle.y - Y_ORIGIN;
      }
    },
    draw: function() {
      for (var i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i];
        drawCircle(particle.x, particle.y, particle.radius * (Math.pow(1.2, (particle.y - Y_ORIGIN) / (MOVEMENT_RADIUS))), 'red');
      }
    },
    drawWithRotation(degree) {
      for (var i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i];
        var newX = (particle.x - X_ORIGIN) * Math.cos(degree) - (particle.y - Y_ORIGIN) * Math.sin(degree);
        var newY = (particle.x - X_ORIGIN) * Math.sin(degree) + (particle.y - Y_ORIGIN) * Math.cos(degree);
        drawCircle(newX + X_ORIGIN, newY + Y_ORIGIN, particle.radius * ((Math.pow(1.2, (particle.y - Y_ORIGIN) / (MOVEMENT_RADIUS)))), 'red');
      }
    }
  }

  function clearCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  for (var i = 0; i < PARTICLE_COUNT; i++) {
    particles.addParticle();
  }
  function loop() {
    clearCanvas();
    particles.draw();
    particles.drawWithRotation(3.5);
    particles.drawWithRotation(1.9);
    particles.update();
    window.requestAnimationFrame(loop, canvas);
  }
  loop();

}
