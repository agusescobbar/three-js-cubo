import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const canvas = document.getElementById("experience-canvas")
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


const camera = new THREE.PerspectiveCamera( 
	75, 
	sizes.width / sizes.height, 
	0.1,
	1000 
	);

const controls = new OrbitControls(camera, canvas);
controls.update();

//luz ambiente y direccional
const color = 0xFFFFFF;
const colorD = 0x000dff;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
const dirLight = new THREE.DirectionalLight(colorD, 10);

const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );

// standard material hace que pueda reflejar o hacer algo con la luz 
const material = new THREE.MeshStandardMaterial( { color: 0xf3daffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

scene.add(light);
light.add(dirLight);

camera.position.z = 1.5;

function handleResize(){
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix()

	renderer.setSize( sizes.width, sizes.height );
	console.log("cambiando")
}

window.addEventListener("resize", handleResize);

function animate() {
	cube.rotation.y += 0.01;
	cube.rotation.x += 0.01;
	
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );