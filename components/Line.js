class Line {
  constructor(lineWeight) {
    this.lineColor = color(random(0, 255), random(0, 255), random(0, 255));
    this.lineWeight = lineWeight;
    this.lineOffsetMAX = 0.6*height;
    this.lineResolution = 3;

    this.numberOfSubLines = 15;

    this.yPos = random(height/3, 2*height/3);
    this.yOff = 0;

    this.noiseOffset = random(0, 1000000);
    this.noiseOffsetOnStart = this.noiseOffset;
    this.noiseScrollSpeed = 0.007;
  }

  show() {
    noFill();
    strokeWeight(this.lineWeight);
    
    for (let i = 1; i <= this.numberOfSubLines; i++) {
      this.lineColor.setAlpha(map(i, 1, this.numberOfSubLines, 150, 180));
      stroke(this.lineColor);

      this.noiseOffset = this.noiseOffsetOnStart;
      beginShape();
      for (this.xPos = 0; this.xPos < width; this.xPos = this.xPos + this.lineResolution) {
        this.yOff = map(noise(this.noiseOffset), 0, 1, -this.lineOffsetMAX, this.lineOffsetMAX);
        if (this.yOff > 0) {
          vertex(this.xPos, this.yPos + this.yOff - map(i, 1, this.numberOfSubLines, 0, abs(this.yOff)/2));
        }
        else {
          vertex(this.xPos, this.yPos + this.yOff + map(i, 1, this.numberOfSubLines, 0, abs(this.yOff)/2));
        }
        this.noiseOffset = this.noiseOffset + this.noiseScrollSpeed;
      }
      endShape();
    }
  }
}