import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Three from "three";

// Scene
const scene = new Three.Scene();

// Background
scene.background = new Three.Color(0x130912);

// Camera
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new Three.PerspectiveCamera(75, aspectRatio, 1, 5000);
camera.position.set(-4.382, 4.474, 11.305);
camera.rotation.set(-0.377, -0.346, -0.133);

const canvas = document.querySelector("#bg");
const renderer = new Three.WebGLRenderer({ canvas });
renderer.toneMapping = Three.ReinhardToneMapping;
renderer.toneMappingExposure = 2.3;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Lights
const hemiLight = new Three.HemisphereLight(0xff642a, 0x080820, 2);
hemiLight.position.set(0, 5, 5);
scene.add(hemiLight);
const moonLight = new Three.SpotLight(0xffffff, 10, 17, 0.4);
moonLight.position.set(5, 7, -14);
moonLight.castShadow = true;
moonLight.shadow.camera.near = 2;
moonLight.shadow.camera.far = 10;
scene.add(moonLight);

const pointLightW1 = new Three.PointLight(0xfff428, 10, 2);
pointLightW1.position.set(0, 4.3, 2);
scene.add(pointLightW1);
const spotLightW1 = new Three.SpotLight(0xfff428, 7, 15, 0.7);
spotLightW1.castShadow = true;
scene.add(spotLightW1);
spotLightW1.position.set(0, 4.3, 1.4);
spotLightW1.target.position.set(0, 0, 2.4);
spotLightW1.target.lookAt(0, 0, 2.4);

const pointLightW2 = new Three.PointLight(0xfff428, 10, 2);
pointLightW2.position.set(-2, 2.4, 2.1);
scene.add(pointLightW2);
const spotLightW2 = new Three.SpotLight(0xfff428, 7, 7, 0.7);
spotLightW2.castShadow = true;
scene.add(spotLightW2);
spotLightW2.position.set(-2, 2.4, 2.1);
spotLightW2.target.position.set(-2, 0, 3);
spotLightW2.target.lookAt(-2, 0, 3);

const lightW4 = new Three.PointLight(0xfff428, 10, 2);
lightW4.position.set(0, 4.3, -2);
scene.add(lightW4);
const lightW5 = new Three.PointLight(0xfff428, 10, 2);
lightW5.position.set(-2, 2.4, -2.1);
scene.add(lightW5);

/* const spotLight = new Three.SpotLight(0xffa95c, 10);
spotLight.position.set(9, 7, -14);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
spotLight.shadow.mapSize.width = 1024 * 4;
spotLight.shadow.mapSize.height = 1024 * 4;
scene.add(spotLight);
const ambientLight = new Three.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight); */

// Debug
/* scene.add(new Three.AxesHelper(500));
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
scene.add(new Three.SpotLightHelper(spotLightW1));
scene.add(new Three.SpotLightHelper(spotLightW2));
scene.add(new Three.SpotLightHelper(moonLight)); */

export { scene, camera, renderer };
