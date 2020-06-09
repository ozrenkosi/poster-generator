class Line {
  constructor(lineWeight) {
    this.lineColor = color(random(0, 255), random(0, 255), random(0, 255), random(150, 180));
    this.lineWeight = lineWeight;
    this.linePointiness = 0.005;
    this.linePositionOffsetMAX = 300;
    this.lineResolution = 2;

    this.xPos = random(width/4, 3*width/4);
    this.yPos = random(height/4, 3*height/4);

    this.xOff = 0;
    this.yOff = 0;

    this.noiseOffset = random(0, 1000000);
  }

  show(lineWeight) {
    noStroke();
    fill(this.lineColor);
    if (random(1) > 0.5) {
      for (this.xPos = 0; this.xPos < width; this.xPos = this.xPos + this.lineResolution) {
        this.yOff = map(noise(this.noiseOffset), 0, 1, -this.linePositionOffsetMAX, this.linePositionOffsetMAX);
        this.noiseOffset = this.noiseOffset + this.linePointiness;
        ellipse(this.xPos, this.yPos + this.yOff, this.lineWeight);
      }
    }
    else {
      for (this.yPos = 0; this.yPos < height; this.yPos = this.yPos + this.lineResolution) {
        this.xOff = map(noise(this.noiseOffset), 0, 1, -this.linePositionOffsetMAX, this.linePositionOffsetMAX);
        this.noiseOffset = this.noiseOffset + this.linePointiness;
        ellipse(this.xPos + this.xOff, this.yPos, this.lineWeight);
      }
    }
  }
}