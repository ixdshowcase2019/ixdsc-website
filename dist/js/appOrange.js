import MARKERDATA from "/js/markerDataOrange.js";

var scene, camera, renderer;

var arToolkitSource, arToolkitContext;

var roots = [];

let length = 0;

function init() {
  scene = new THREE.Scene();

  let ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
  scene.add(ambientLight);

  camera = new THREE.Camera();
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  // renderer.setClearColor(new THREE.Color("lightgrey"), 0);
  // renderer.setSize(640, 480);
  // renderer.domElement.style.position = "absolute";
  // renderer.domElement.style.top = "0px";
  // renderer.domElement.style.left = "0px";
  // document.body.appendChild(renderer.domElement);

  // scene = new THREE.Scene();

  // let ambientLight = new THREE.AmbientLight(0x666666);
  // scene.add(ambientLight);

  // camera = new THREE.Camera();
  // scene.add(camera);

  // renderer = new THREE.WebGLRenderer({
  //   alpha: true
  // });

  // renderer.domElement.style.position = "absolute";
  // renderer.domElement.style.top = "0px";
  // renderer.domElement.style.left = "0px";
  // document.body.appendChild(renderer.domElement);

  arToolkitSource = new THREEx.ArToolkitSource({
    sourceType: "webcam"
  });

  function onResize() {
    arToolkitSource.onResizeElement();
    // arToolkitSource.copySizeTo(renderer.domElement);
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
  }

  arToolkitSource.init(function onReady() {
    onResize();
  });

  window.addEventListener("resize", function() {
    onResize();
  });

  arToolkitContext = new THREEx.ArToolkitContext({
    cameraParametersUrl: "data/orange/camera_para.dat",
    detectionMode: "mono",
    maxDetectionRate: 30,
    patternRatio: 0.5
  });

  arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  MARKERDATA.forEach(marker => {
    let markerRoot = new THREE.Group();
    markerRoot.url = marker.url;
    roots.push(markerRoot);
    scene.add(markerRoot);
    // console.log(marker.pattern);
    new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
      type: "pattern",
      patternUrl: marker.pattern
    });
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  if (arToolkitSource.ready !== false) {
    arToolkitContext.update(arToolkitSource.domElement);
  }

  roots.forEach(marker => {
    if (marker.visible) {
      updateShown(marker.url);
      console.log(marker.url);
    }
  });
}

function updateShown(value) {
  document.getElementById("isSeen").innerHTML = value;
}

init();
