var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.add( new THREE.AmbientLight( 0x222222 ) );
var light = new THREE.PointLight(0xffffff, 2);
camera.add(light);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
});

var transparent = new THREE.MeshLambertMaterial({
    color: 0xffff00,
    opacity: 0.5,
    transparent: true,
});

var saturn = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    material
);

var cube = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    material
);

var shapes = [
    saturn, cube
];

for (var i = 0; i < shapes.length; i++) {
    scene.add(shapes[i]);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    for (var i = 0; i < shapes.length; i++) {
        shapes[i].rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}
animate();
