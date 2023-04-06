// Create a Three.js scene
var scene = new THREE.Scene();

// Create a camera and add it to the scene
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// Create a renderer and add it to the page
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D model
var loader = new THREE.OBJLoader();
loader.load(
    'doggo.obj',
    function (object) {
        scene.add(object);
    }
);

// Listen for mouse movement
var mouse = new THREE.Vector2();
document.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseMove(event) {
    // Normalize mouse position
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Move the 3D model to follow the mouse
    camera.position.x = mouse.x * 5;
    camera.position.y = mouse.y * 5;
    camera.lookAt(scene.position);
}

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();