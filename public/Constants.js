// Ubicación inicial de cada npc, rotación, tamaño y animación.
const NPCParams = [
  { path: "/place/scene.gltf", pos: [0, 0, 0], rot: [0, 0, 0], wei: 1 },
  { path: "/sunflower/scene.gltf", pos: [4, -1.3, 3], rot: [0, -0.7, -0.2], wei: 0.5 },
  { path: "/squash/scene.gltf", pos: [1, -0.5, 5.5], rot: [-0.3, -0.8, -0.6], wei: 0.45 },
  { path: "/snowpea/scene.gltf", pos: [2, -1, 4], rot: [0, -1.4, -0.3], wei: 0.45 },
  { path: "/peashooter/scene.gltf", pos: [0.5, -0.2, 3], rot: [0.2, -0.5, 0], wei: 0.4 },
  { path: "/zombie/scene.gltf", pos: [-3, -0.86, 4], rot: [0, 1, 0.65], wei: 0.5 },
  { path: "/zombie/scene.gltf", pos: [-3, -1.4, 5], rot: [0.5, 1.7, 0], wei: 0.5 },
  { path: "/shrek/scene.gltf", pos: [-1.4, 0.2, -3.4], rot: [0, 1.7, 0], wei: 0.001 },
  { path: "/kingboo/scene.gltf", name: "boo", t: 0, pos: [0, 2, -4], rot: [0, 1, 0], wei: 0.002 },
  { path: "/mcmutant/scene.gltf", pos: [-2.5, -0.2, 3], rot: [0.2, -2.5, 0], wei: 0.5, anim: 2 },
  { path: "/banana/scene.gltf", pos: [1, 0.3, -3.4], rot: [0, 2.9, 0], wei: 0.01, anim: 1 },
  { path: "/cube/scene.gltf", pos: [-0.2, 0.5, -3.6], rot: [0, 0, 0], wei: 0.0017, anim: 1 },
  { path: "/cake/scene.gltf", pos: [-0.2, 1, -3.2], rot: [0, 0, 0], wei: 0.3, anim: 1 },
  { path: "/popcat/scene.gltf", pos: [3.7, 0, 0], rot: [0, 1.2, 0], wei: 0.07, anim: 0 },
  { path: "/stormtrooper/scene.gltf", pos: [3, -1.6, 4.5], rot: [0, 0, -0.3], wei: 0.45 },
  { path: "/bart/scene.gltf", pos: [-1, 0.2, -4.5], rot: [0, 1.7, 0], wei: 0.5 },
  { path: "/pikachu/scene.gltf", pos: [0, 0.2, -4.5], rot: [0, 3, 0], wei: 0.15 },
  { path: "/crewmate/scene.gltf", name: "crewmate", pos: [3.2, 0.28, 0], rot: [0, 3, 0], wei: 0.0025, anim: 0 },
  { path: "/masterchief/scene.gltf", pos: [4.2, -2, 5], rot: [0, 0, -0.3], wei: 0.4, anim: 2 },
  //{ path: "/squash/scene.gltf", pos: [0, 4.3, 1.7], rot: [0, 0, 0], wei: 0.45 },
  //{ path: "/badpumpkin/scene.gltf", pos: [4, 0.8, 0], rot: [0, 0, -0.3], wei: 0.012 },
];

// Saltos de camara con coordenadas (cords) y rotación (rots)
const camLocs = {
  camLoc1: { cords: { x: -0.494, y: -0.803, z: 8.522 }, rots: { x: 0.094, y: -0.058, z: 0.005 } },
  camLoc2: { cords: { x: -3.801, y: -0.69, z: 7.654 }, rots: { x: 0.09, y: -0.459, z: 0.04 } },
  camLoc3: { cords: { x: -2.271, y: -0.132, z: 5.878 }, rots: { x: 0.023, y: -0.369, z: 0.008 } },
  camLoc4: { cords: { x: -2.381, y: 3.37, z: 5.323 }, rots: { x: -1.008, y: -0.972, z: -0.919 } },
  camLoc5: { cords: { x: 6.307, y: -0.416, z: 7.092 }, rots: { x: 0.059, y: 0.726, z: -0.039 } },
  camLoc6: { cords: { x: 5.959, y: 0.285, z: -0.509 }, rots: { x: -2.631, y: 1.473, z: 2.633 } },
  camLoc7: { cords: { x: -0.413, y: 5.264, z: -6.755 }, rots: { x: -2.48, y: -0.048, z: -3.104 } },
  camLoc8: { cords: { x: -1.125, y: 12.875, z: 0.026 }, rots: { x: -1.569, y: -0.087, z: -1.548 } },
  camLoc9: { cords: { x: -4.382, y: 4.474, z: 11.305 }, rots: { x: -0.377, y: -0.346, z: -0.133 } },
};

// Contenido html
const bodyContents = {
  content1: `<div class="center">
        <h2>Hola humana/o! 👋</h2>
        <p>Se te invita cordialmente a la celebración de mi cumple este día 31 de Octubre</p>
      </div>`,
  content2: `<div class="center">
        <h1>Será el evento del año 🎊🎊🎊</h1>
      </div>`,
  content3: `<div class="center">
  <p>Y debes asistir debidamente disfrazada/o 👨‍🚀🦸‍♀️ 🧙‍♂️🧛 🤰👩‍⚕️ (a libre elección, no necesariamente de terror)</p>
  </div>`,
  content4: `<div class="center">
  <p>recuerda traer tu pase de movilidad debidamente habilitado y cumplir con los protocolos establecidos por las autoridades 😷</p>
      </div>`,
  content5: `<div class="center">
  <p>La celebración será en la casita de Hualpen 🏡</p>
      </div>`,
  content6: `<div class="center">
        <h2>Y recuerda mostrar respeto ante las bendiciones! 🐈🐈</h2>
        <p>pintas y tin</p>
      </div>`,
  content7: `<div class="center">
        <h2>Habrá pastel!</h2>
        <p>juegos, silla musical, pirotecnia, fornai, frifai y mucho más </p>
      </div>`,
  content8: `<div class="center">
        <h2>No faltes 😎</h2>
        <br>
        <br>
        <h2>Creado con ThreeJS sobre Vite!</h2>
        <h2>Modelos de <a href="sketchfab.com">sketchfab.com</a></h2>
        <h2>Repositorio <a href="https://github.com/AmigoManuel/NelSpookyParty">NelSpookyParty</a></h2>
      </div>`,
  content9: `<div class="center">
        <h2>Invitación al cumple de NEL 🎃🎈</h2>
        <p></p>
      </div>`,
};

export { bodyContents, camLocs, NPCParams };
