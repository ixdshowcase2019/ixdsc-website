import DATA from "./generativeMarkerInput.js";

let canvasWidth, canvasHeight, padding, innerWidth;

let font = {};
let grid = {};
let circle = {};

let canvas;

let blue, orange, blueCMYK, orangeCMYK;

const total = DATA.length;
let current = 0;

let sketch = function(p) {
  p.preload = function() {
    font.family = p.loadFont("assets/fonts/ClassicGrotesquePro-SmBdIt.otf");
  };

  p.setup = function() {
    console.log(DATA.length);
    // const displaySketch = document.getElementById("sketchContainer");
    p.frameRate(2);
    canvasWidth = 2000;
    canvasHeight = 2000;
    padding = p.floor(canvasWidth / 10);
    circle.width = p.floor(canvasWidth / 20);
    innerWidth = canvasWidth - (2 * padding + circle.width);

    font.primary = {
      size: p.floor(canvasHeight / 10),
      lineHeight: p.floor(p.floor(canvasHeight / 10) * 1.4)
    };

    font.secondary = {
      size: p.floor(canvasHeight / 30),
      lineHeight: p.floor(p.floor(canvasHeight / 30) * 1.2)
    };
    grid.rows = 3;
    grid.columns = 8;
    grid.spacing = p.floor(innerWidth / (grid.columns - 1));

    orange = p.color(255, 80, 0);
    blue = p.color(0, 175, 219);

    blueCMYK = p.color(0, 175, 220);
    orangeCMYK = p.color(240, 82, 34);

    canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.parent("sketchContainer");
  };

  p.draw = function() {
    if (current < DATA.length) {
      p.background(255);
      p.fill(0);
      p.textFont(font.family);
      p.textAlign(p.LEFT, p.TOP);
      p.textSize(font.primary.size);
      p.text(DATA[current].firstName, padding, 1.3 * padding);
      // p.text(
      //   DATA[current].lastName,
      //   padding,
      //   padding + font.primary.lineHeight
      // );
      // gridLayout(p, 1.8 * padding + 2 * font.primary.lineHeight);
      p.noStroke();
      if (current < DATA.length / 2) {
        p.fill(blueCMYK);
      } else {
        p.fill(orangeCMYK);
      }
      p.rect(
        padding * 0.5,
        (canvasHeight - (grid.spacing * 6 + circle.width) / 2) / 2,
        canvasWidth - padding,
        grid.spacing * 3 + circle.width
      );
      gridLayout(p, (canvasHeight - (grid.spacing * 3 + circle.width) / 2) / 2);
      // socialMedia(
      //   p,
      //   canvasHeight - 3 * font.secondary.lineHeight - padding,
      //   DATA[current].social
      // );
      p.fill(0);
      p.textAlign(p.RIGHT, p.BOTTOM);
      p.text(
        DATA[current].lastName,
        canvasWidth - padding,
        canvasHeight - padding
      );
      let fileName =
        DATA[current].firstName
          .split(" ")
          .join("-")
          .split("'")
          .join("-")
          .toLowerCase() +
        "-" +
        DATA[current].lastName
          .split(" ")
          .join("-")
          .split("'")
          .join("-")
          .toLowerCase() +
        ".jpg";
      p.save(canvas, fileName);
      current++;
    } else {
      p.noLoop();
    }
  };
};

let gridLayout = function(p, yOffset) {
  p.randomSeed(current);
  for (let x = 0; x < grid.columns; x++) {
    for (let y = 0; y < grid.rows; y++) {
      p.noStroke();
      p.fill(255 * p.round(p.random(0, 1)));
      p.ellipse(
        padding + circle.width / 2 + x * grid.spacing,
        yOffset + y * grid.spacing,
        circle.width
      );
    }
  }
};

// let socialMedia = function(p, yOffset, social) {
//   p.fill(0);
//   p.textAlign(p.LEFT, p.TOP);
//   p.textSize(font.secondary.size);
//   p.text(social.instagram, padding, yOffset);
//   p.text(social.linkedin, padding, yOffset + font.secondary.lineHeight);
//   p.text(social.website, padding, yOffset + 2 * font.secondary.lineHeight);
// };

document.getElementById("createMarkers").addEventListener("click", function() {
  let s = new p5(sketch);
});
