import DATA from "./generativeMarkerInput.js";

var innerImageURL = null;
var fullMarkerURL = null;
innerImageURL = "assets/generatedImages/amos-nielsen.png";

console.log(DATA.length);

function updateFullMarkerImage(name) {
  // get patternRatio
  var patternRatio = document.querySelector("#patternRatioSlider").value / 100;
  THREEx.ArPatternFile.buildFullMarker(
    innerImageURL,
    patternRatio,
    function onComplete(markerUrl) {
      fullMarkerURL = markerUrl;
      var markerInstanceURL = markerUrl;
      downloadPattern(name, innerImageURL);
      downloadImage(name, markerInstanceURL);
    }
  );
}

function downloadPattern(name, imageURL) {
  if (imageURL === null) {
    alert("upload a file first");
    return;
  }
  console.assert(imageURL);
  THREEx.ArPatternFile.encodeImageURL(imageURL, function onComplete(
    patternFileString
  ) {
    THREEx.ArPatternFile.triggerDownload(patternFileString, name);
  });
  // if (innerImageURL === null) {
  //   alert("upload a file first");
  //   return;
  // }
  // console.assert(innerImageURL);
  // THREEx.ArPatternFile.encodeImageURL(innerImageURL, function onComplete(
  //   patternFileString
  // ) {
  //   THREEx.ArPatternFile.triggerDownload(patternFileString, name);
  // });
}

function downloadImage(name, instanceURL) {
  if (instanceURL === null) {
    alert("upload a file first");
    return;
  }
  // tech from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
  var domElement = window.document.createElement("a");
  domElement.href = instanceURL;
  domElement.download = name + ".png";
  document.body.appendChild(domElement);
  domElement.click();
  document.body.removeChild(domElement);

  // debugger
  // if (innerImageURL === null) {
  //   alert("upload a file first");
  //   return;
  // }
  // // tech from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
  // var domElement = window.document.createElement("a");
  // domElement.href = fullMarkerURL;
  // domElement.download = name + ".png";
  // document.body.appendChild(domElement);
  // domElement.click();
  // document.body.removeChild(domElement);
}
// );
// document
//   .querySelector("#patternRatioSlider")
//   .addEventListener("input", function() {
//     // update the patternRatio number
//     var patternRatio =
//       document.querySelector("#patternRatioSlider").value / 100;
//     var domElement = document.querySelector(
//       "[for=patternRatioSlider] span"
//     );
//     domElement.innerHTML = `Pattern Ratio ${patternRatio.toFixed(2)}`;
//     // update fullMarkerImage
//     updateFullMarkerImage();
//   });
// document.querySelector("#fileinput").addEventListener("change", function() {
//   var file = this.files[0];
//   // debugger
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     innerImageURL = event.target.result;
//     updateFullMarkerImage();
//   };
//   reader.readAsDataURL(file);
// });

var total = DATA.length;
var current = 0;

document
  .getElementById("generateAll")
  .addEventListener("click", recurringWrapper);

function recurringWrapper() {
  setTimeout(() => {
    var name =
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
        .toLowerCase();
    console.log(name);
    innerImageURL = "assets/generatedImages/" + name + ".png";
    updateFullMarkerImage(name);
    current++;

    if (current < total) {
      recurringWrapper();
    } else {
      console.log("done");
    }
  }, 500);
}
