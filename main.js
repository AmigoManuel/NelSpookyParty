import "./style.css";
import * as Three from "three";
import * as Tween from "@tweenjs/tween.js";
import { scene, camera, renderer } from "./public/InitialConfig";
import { loadNPCS, cameraProcedure } from "./public/Procedures";

const clock = new Three.Clock();

// Carga los npcs
const npcs = loadNPCS(scene);

// Gestiona acciones de la camara
cameraProcedure(camera);

// Auxiliar para definir sentido del crewmate
let multiplier = 1;
// main loop
const animate = (time) => {
  requestAnimationFrame(animate);

  // Logica para mover el boo
  var delta = clock.getDelta();
  npcs.forEach((npc) => {
    // Actualiza las animaciones
    if (npc.mixer) npc.mixer.update(delta);
    // logica del boo
    if (npc.name === "boo") {
      npc.t += 0.001;
      npc.model.position.x += 0.005 * Math.cos(npc.t) + 0;
      npc.model.position.z += 0.005 * Math.sin(npc.t) + 0;
      npc.model.rotation.y -= 0.001 * Math.sin(npc.t) + 0;
    }
    // logica del crewmate
    if (npc.name === "crewmate") {
      if (Math.abs(npc.model.position.z) - Math.abs(npc.initialPos.z) > 1) {
        multiplier *= -1;
        if (multiplier == -1) {
          npc.model.rotation.y = 3;
        } else {
          npc.model.rotation.y = 6;
        }
      }
      npc.model.position.z += 0.01 * multiplier;
    }
  });

  renderer.render(scene, camera);
  Tween.update(time);
};

animate();
