import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

//luz ambiente y direccional
const color = 0xFFFFFF;
const colorD = 0x000dff;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
const dirLight = new THREE.DirectionalLight(colorD, 10);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// standard material hace que pueda reflejar o hacer algo con la luz 
const material = new THREE.MeshStandardMaterial( { color: 0xf3daffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

scene.add(light);
light.add(dirLight);

camera.position.z = 1.5;


function animate() {

	cube.rotation.y += 0.01;
	cube.rotation.x += 0.01;

	
	
	renderer.render( scene, camera );

}