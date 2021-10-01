import * as Three from "three";
import * as Tween from "@tweenjs/tween.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Cargar modelos gltf
const loadModel = (path, scene, [x, y, z], w, [rx, ry, rz], anim) => {
  const gltfLoader = new GLTFLoader();
  const arr = new Object();
  if (anim == null) anim = 0;
  gltfLoader.load(path, (gltf) => {
    const model = gltf.scene;
    const animations = gltf.animations;
    model.position.set(x, y, z);
    model.rotation.set(rx, ry, rz);
    model.traverse((n) => {
      if (n.isMesh) {
        n.scale.set(1, 1, 1);
        n.castShadow = true;
        n.receiveShadow = true;
        if (n.material.map) {
          n.material.map.anisotropy = 16;
        }
      }
    });
    model.scale.set(w, w, w);
    scene.add(model);
    const mixer = new Three.AnimationMixer(model);
    const action = mixer.clipAction(animations[anim]);
    action.play();
    arr.model = model;
    arr.mixer = mixer;
    arr.initialPos = { x: x, y: y, z: z };
  });
  return arr;
};

// Desplegar html sobre div
const textManager = (bodyContent) => {
  document.getElementById("dummy").remove();
  let newDiv = document.createElement("div");
  newDiv.id = "dummy";
  newDiv.innerHTML += bodyContent;
  document.getElementsByTagName("div")[0].appendChild(newDiv);
  //document.getElementById("dummy").outerHTML = "";
};

// Mover camara suavemente
const tweenCamera = (camera, dstCords, dstRots, bodyContent) => {
  const cords = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
  const rots = { x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z };
  new Tween.Tween(cords)
    .to(dstCords)
    .onUpdate(() => camera.position.set(cords.x, cords.y, cords.z))
    .onStart(() => textManager(" "))
    .onComplete(() => textManager(bodyContent))
    .start();
  new Tween.Tween(rots)
    .to(dstRots)
    .onUpdate(() => camera.rotation.set(rots.x, rots.y, rots.z))
    .start();
};

export { loadModel, textManager, tweenCamera };
