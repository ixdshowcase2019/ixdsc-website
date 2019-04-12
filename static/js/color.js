// Wait for the page to be ready
window.addEventListener("load", function(e) {


  var blue = {r: 55, g:123, b:161}
  var orange = {r: 182, g:112, b:90}
  var camColor = {r: 0, g: 0, b: 0};

  var sliderBlue = document.getElementById("toleranceBlue");
  var sliderOrange = document.getElementById("toleranceOrange");
  var orangeValue = document.getElementById('orangeValue');
  var blueValue = document.getElementById('blueValue');
  var found = document.getElementById("found");
  var canvas  = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var webcam = document.getElementById('webcam');
  var swatch = document.getElementById("color");


  // Register our custom color tracking function
  tracking.ColorTracker.registerColor('orange', function(r, g, b) {
    return getColorDistance(orange, {r: r, g: g, b: b}) < sliderOrange.value
  });

  tracking.ColorTracker.registerColor('blue', function(r, g, b) {
    return getColorDistance(blue, {r: r, g: g, b: b}) < sliderBlue.value
  });


  // Create the color tracking object
  var trackerOrange = new tracking.ColorTracker("orange");
  var trackerBlue = new tracking.ColorTracker("blue");



  // BLUE Add callback for the "track" event
  trackerBlue.on('track', function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (e.data.length !== 0) {
      window.location.href = '/blueRedirect.html';
    }

  // ORANGE Add callback for the "track" event
  trackerOrange.on('track', function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (e.data.length !== 0) {
      window.location.href = '/orangeRedirect.html';
    }
  });


  // Add listener for the click event on the video
  webcam.addEventListener("click", function (e) {
    var c = getColorAt(webcam, e.offsetX, e.offsetY);
    camColor.r = c.r;
    camColor.g = c.g;
    camColor.b = c.b;
    swatch.style.backgroundColor = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")";
    console.log("color : rgb(" + c.r + ", " + c.g + ", " + c.b + ")");
  });
});


  // Start tracking
  tracking.track(webcam, trackerOrange, { camera: true } );
  tracking.track(webcam, trackerBlue, { camera: true } );

});


function getColorAt(webcam, x, y) {
  // To be able to access pixel data from the webcam feed, we must first draw the current frame in
  // a temporary canvas.
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = webcam.width;
  canvas.height = webcam.height;
  context.drawImage(webcam, 0, 0, webcam.width, webcam.height);
  // Then we grab the pixel information from the temp canvas and return it as an object
  var pixel = context.getImageData(x, y, 1, 1).data;
  return {r: pixel[0], g: pixel[1], b: pixel[2]};

}


// Calculates the Euclidian distance between the target color and the actual color
function getColorDistance(target, actual) {
  return Math.sqrt(
    (target.r - actual.r) * (target.r - actual.r) +
    (target.g - actual.g) * (target.g - actual.g) +
    (target.b - actual.b) * (target.b - actual.b)
  );
}
