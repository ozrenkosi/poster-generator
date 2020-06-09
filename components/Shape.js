class Shape {
  constructor() {
    this.shapeColor = color(random(0, 255), random(0, 255), random(0, 255), random(150, 180));
  }

  show() {
    noStroke();
    fill(this.shapeColor);
    rectMode(CENTER);
    push();
    translate(width/2, height/2);
    if (random(1) > 0.5) {
      rect(random(-width/2, width/2), random(-height/2, height/2), random(500, 700), random(50, 700));
    }
    else {
      ellipse(random(-width/2, width/2), random(-height/2, height/2), random(200, 700));
    }
    pop();
    }
}