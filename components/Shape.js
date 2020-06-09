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
      rect(random(-width/2, width/2), random(-height/2, height/2), random(0.6*height, 0.9*height), random(0.06*height, 0.9*height));
    }
    else {
      ellipse(random(-width/2, width/2), random(-height/2, height/2), random(0.25*height, 0.9*height));
    }
    pop();
    }
}