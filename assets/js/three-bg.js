// Modern Abstract 3D Interactive Background using Three.js
// Author: AI (2024)
// Uses global THREE from CDN

let scene, camera, renderer, shapes = [], mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };

function createShape(type, color, position, rotation, scale) {
  let geometry;
  switch (type) {
    case 'cube':
      geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      break;
    case 'sphere':
      geometry = new THREE.SphereGeometry(0.9, 32, 32);
      break;
    case 'torus':
      geometry = new THREE.TorusGeometry(0.7, 0.25, 16, 100);
      break;
    case 'octahedron':
      geometry = new THREE.OctahedronGeometry(1);
      break;
    default:
      geometry = new THREE.IcosahedronGeometry(1, 0);
  }
  const material = new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 0.6,
    roughness: 0.25,
    clearcoat: 0.7,
    clearcoatRoughness: 0.2,
    transmission: 0.2,
    thickness: 0.5,
    transparent: true,
    opacity: 0.85,
    sheen: 1.0,
    sheenColor: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.5),
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  mesh.scale.set(scale, scale, scale);
  mesh.userData = {
    baseY: position.y,
    floatSpeed: 0.3 + Math.random() * 0.3,
    floatPhase: Math.random() * Math.PI * 2,
    rotSpeed: 0.003 + Math.random() * 0.004,
    colorBase: color,
    type: type
  };
  return mesh;
}

function init() {
  const canvas = document.getElementById('three-bg');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x181818);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 18;

  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0x3fa7ff, 1.1);
  dirLight.position.set(8, 12, 10);
  scene.add(dirLight);
  const pointLight = new THREE.PointLight(0xffd700, 0.7, 100);
  pointLight.position.set(-10, -8, 10);
  scene.add(pointLight);

  // Color palette (modern gradients)
  const colors = [0x3fa7ff, 0xffd700, 0x8e54e9, 0x43e97b, 0xf857a6, 0x23272f];
  const types = ['cube', 'sphere', 'torus', 'octahedron', 'icosahedron'];

  for (let i = 0; i < 16; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 18
    );
    const rot = new THREE.Vector3(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    const scale = 0.8 + Math.random() * 0.8;
    const shape = createShape(type, color, pos, rot, scale);
    shapes.push(shape);
    scene.add(shape);
  }

  document.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onWindowResize);
  animate();
}

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  // Camera parallax
  target.x = mouse.x * 2.2;
  target.y = mouse.y * 1.1;
  camera.position.x += (target.x - camera.position.x) * 0.04;
  camera.position.y += (-target.y - camera.position.y) * 0.04;
  camera.lookAt(scene.position);

  // Animate shapes
  const time = Date.now() * 0.0008;
  shapes.forEach((shape, idx) => {
    // Floating
    shape.position.y = shape.userData.baseY + Math.sin(time * 2 * shape.userData.floatSpeed + shape.userData.floatPhase) * 1.1;
    // Rotation
    shape.rotation.x += shape.userData.rotSpeed * (0.7 + mouse.y * 0.3);
    shape.rotation.y += shape.userData.rotSpeed * (1.1 + mouse.x * 0.5);
    // Subtle color shift on hover
    if (shape.material && shape.material.color) {
      const base = new THREE.Color(shape.userData.colorBase);
      const hover = base.clone().lerp(new THREE.Color(0xffffff), 0.18 + 0.18 * Math.abs(mouse.x + mouse.y));
      shape.material.color.lerp(hover, 0.08);
    }
  });

  renderer.render(scene, camera);
}

init(); 