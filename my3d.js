
// //Codigo necesario que nos pasa threejs:
// import * as THREE from 'three';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// // document.body.appendChild( renderer.domElement );//Esto es para meterlo en el body
// document.getElementsById("3d").appendChild( renderer.domElement );//Esto es para meterlo en el body


// //ejemplo del cubo https://threejs.org/docs/#api/en/geometries/BoxGeometry
// const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
// const cube = new THREE.Mesh( geometry, material ); 
// scene.add( cube );

// camera.position.z = 5;
// function animate() {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// renderer.setAnimationLoop( animate );


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



const container = document.getElementById("d3d");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

//LA caja
const geometry = new THREE.BoxGeometry( 1, 1, 1.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x0099aa } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//LA caja
const lageometry = new THREE.BoxGeometry( 1, 1, 2 );
const lamaterial = new THREE.MeshBasicMaterial( { color: 0x99bbaa } );
const lacube = new THREE.Mesh( lageometry, lamaterial );
lacube.position.x = -5;

//Esfera
const esfera = new THREE.SphereGeometry( 1, 34, 32 );
const esferaMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); 
const sphere = new THREE.Mesh( esfera, esferaMaterial ); scene.add( sphere );

scene.add( lacube );

camera.position.z = 5;

// const light = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );


controls.update();

function animate() {
	
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube.position.z += 0.006;
	
	lacube.rotation.x += 0.01;
	lacube.rotation.y += 0.01;

	sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;
	renderer.render( scene, camera );
	// controls.update();
	
	
}
