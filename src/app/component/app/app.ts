import {defineComponent, ref, Ref, computed, onMounted} from "vue";
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

export default defineComponent({
    name: "App",
	components: {},
    setup() {
		onMounted(() => {
			if ( WebGL.isWebGLAvailable() ) {
				alert('can modeling')
			}

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth / 2, window.innerHeight / 2 );
			document.getElementById('root').appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 'skyblue' } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 4;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.05;

				renderer.render( scene, camera );
			}

			animate();
		});

		return;
    }
})
