let lines = [];
let shapes = [];
let lineGenerateButton, shapeGenerateButton;
let bgLightButton, bgDarkButton;
let exportButtonJPG, exportButtonSVG;
let bgColor;
let sliderNumberOfLines, sliderNumberOfShapes;
let paragraphNumberOfLines, paragraphNumberOfShapes;

function setup() {
  createCanvas(windowHeight/1.414, windowHeight, SVG);
  bgColor = color(10);
  background(bgColor);
  
  noLoop();

  createSideHtmlElements();

  lineGenerateButton.mousePressed(function() {
    lines = [];
    shapes = [];
    background(bgColor);
    createLines(sliderNumberOfLines.value());
    drawLines();
  });

  shapeGenerateButton.mousePressed(function() {
    lines = [];
    shapes = [];
    background(bgColor);
    createShapes(sliderNumberOfShapes.value());
    drawShapes();
  });

  bgLightButton.mousePressed(function() {
    bgColor = color(230);
    background(bgColor);
  });

  bgDarkButton.mousePressed(function() {
    bgColor = color(10);
    background(bgColor);
  });

  exportButtonJPG.mousePressed(function() {
    save('poster.jpg');
  });

  exportButtonSVG.mousePressed(function() {
    save('poster.svg');
  });

  sliderNumberOfLines.input(function() {
    paragraphNumberOfLines.html('Number of lines: ' + sliderNumberOfLines.value());
  });

  sliderNumberOfShapes.input(function() {
    paragraphNumberOfShapes.html('Number of shapes: ' + sliderNumberOfShapes.value());
  });
}

function createLines(numberOfLines) {
  for (let i = 0; i < numberOfLines; i++) {
    lines[i] = new Line(2);
  }
}

function drawLines() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].show();
  }
}

function createShapes(numberOfShapes) {
  for (let i = 0; i < numberOfShapes; i++) {
    shapes[i] = new Shape();
  }
}

function drawShapes() {
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].show();
  }
}

function createSideHtmlElements() {
  createDiv().id('rightDivColumn');
  createElement('h1', 'Poster generator').parent('rightDivColumn');

  createElement('h2', '1) Choose background color').parent('rightDivColumn');
  bgLightButton = createButton('Light').parent('rightDivColumn');
  bgDarkButton = createButton('Dark').parent('rightDivColumn');
  
  createElement('h2', '2) Choose a design element for your poster').parent('rightDivColumn');
  
  createDiv().id('firstSectionDiv1').parent('rightDivColumn');
  createElement('h3', 'Lines').parent('firstSectionDiv1');
  lineGenerateButton = createButton('Generate').parent('firstSectionDiv1');
  sliderNumberOfLines = createSlider(1, 5, 1, 1);
  paragraphNumberOfLines = createP('Number of lines: ' + sliderNumberOfLines.value()).parent('firstSectionDiv1');
  sliderNumberOfLines.parent('firstSectionDiv1');

  createDiv().id('firstSectionDiv2').parent('rightDivColumn');
  createElement('h3', 'Shapes').parent('firstSectionDiv2');
  shapeGenerateButton = createButton('Generate').parent('firstSectionDiv2');
  sliderNumberOfShapes = createSlider(1, 5, 3, 1);
  paragraphNumberOfShapes = createP('Number of shapes: ' + sliderNumberOfShapes.value()).parent('firstSectionDiv2');
  sliderNumberOfShapes.parent('firstSectionDiv2');
  
  createElement('h2', '3) Export your poster').parent('rightDivColumn');
  exportButtonJPG = createButton('Export JPG').parent('rightDivColumn');
  exportButtonSVG = createButton('Export SVG').parent('rightDivColumn');
}