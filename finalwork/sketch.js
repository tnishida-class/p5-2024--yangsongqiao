// 最終課題を制作しよう
let fireWorks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0, 25);
  drawStars();
  for (let i = fireWorks.length - 1; i >= 0; i--) {
    fireWorks[i].update();
    fireWorks[i].show();
    if (fireWorks[i].isDone()) {
      fireWorks.splice(i, 1);
    }
  }
}

function mousePressed() {
  let firework = new FireWork(mouseX, mouseY);
  fireWorks.push(firework);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawStars() {
  for (let i = 0; i < 20; i++) {
    let x = random(0, windowWidth);
    let y = random(0, windowHeight / 4);
    fill(255, 255, 255);
    ellipse(x, y, 5);
  }
}

class FireWork {
  constructor(x, y) {
    this.particles = [];
    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(x, y));
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }

  isDone() {
    for (let particle of this.particles) {
      if (!particle.isDone()) {
        return false;
      }
    }
    return true;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-10, 10);
    this.vy = random(-10, 10);
    this.lifespan = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 4;
  }

  show() {
    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255), this.lifespan);
    ellipse(this.x, this.y, 5);
  }

  isDone() {
    return this.lifespan <= 0;
  }
}
