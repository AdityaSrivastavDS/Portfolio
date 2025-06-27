// Three.js Blossom/Petal Background
// Uses global THREE from CDN

let scene, camera, renderer, petals = [], mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

function createPetal(color, position, rotation, scale, opacity) {
  // Petal shape using LatheGeometry
  const points = [];
  for (let i = 0; i < 20; i++) {
    const t = i / 19;
    const r = 0.2 + 1.2 * Math.sin(Math.PI * t);
    points.push(new THREE.Vector2(Math.sin(Math.PI * t) * r, t * 2.2));
  }
  const geometry = new THREE.LatheGeometry(points, 32);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: opacity,
    roughness: 0.45,
    metalness: 0.2,
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  mesh.scale.set(scale, scale, scale);
  mesh.userData = {
    baseY: position.y,
    floatSpeed: 0.2 + Math.random() * 0.2,
    floatPhase: Math.random() * Math.PI * 2,
    rotSpeed: 0.003 + Math.random() * 0.004,
    fadeSpeed: 0.5 + Math.random() * 0.5,
    fadePhase: Math.random() * Math.PI * 2,
    baseOpacity: opacity
  };
  return mesh;
}

function init() {
  const canvas = document.getElementById('three-bg');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x23272f);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 22;

  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffe0fa, 1.2, 100);
  pointLight.position.set(10, 20, 20);
  scene.add(pointLight);

  // Petal colors (soft pastels)
  const colors = [0xf8bbd0, 0xb39ddb, 0x90caf9, 0xffffff, 0xffe082];
  for (let i = 0; i < 12; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 16
    );
    const rot = new THREE.Vector3(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    const scale = 0.7 + Math.random() * 0.7;
    const opacity = 0.55 + Math.random() * 0.35;
    const petal = createPetal(color, pos, rot, scale, opacity);
    petals.push(petal);
    scene.add(petal);
  }

  document.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onWindowResize);
  animate();
}

function onMouseMove(event) {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = (event.clientY / window.innerHeight) * 2 - 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  // Subtle camera movement
  targetX = mouseX * 2.5;
  targetY = mouseY * 1.2;
  camera.position.x += (targetX - camera.position.x) * 0.04;
  camera.position.y += (-targetY - camera.position.y) * 0.04;
  camera.lookAt(scene.position);

  // Animate petals
  const time = Date.now() * 0.0007;
  petals.forEach((petal, idx) => {
    petal.position.y = petal.userData.baseY + Math.sin(time * 2 * petal.userData.floatSpeed + petal.userData.floatPhase) * 0.7;
    petal.rotation.x += petal.userData.rotSpeed;
    petal.rotation.y += petal.userData.rotSpeed * 0.7;
    // Fade in/out
    const fade = 0.7 + 0.3 * Math.sin(time * petal.userData.fadeSpeed + petal.userData.fadePhase);
    petal.material.opacity = petal.userData.baseOpacity * fade;
  });

  renderer.render(scene, camera);
}

init(); 