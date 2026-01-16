# 🧊 Basic Cube Viewer

Three.js의 "Hello World" 격인 회전하는 큐브 예제입니다.
3D 웹 개발을 위한 필수 3요소와 애니메이션 루프의 작동 원리를 학습합니다.

## 📚 핵심 학습 내용 (The Three Basic Elements)

Three.js로 화면을 출력하기 위해 반드시 필요한 3가지 요소입니다.

1.  **Scene (무대):** 물체가 배치되는 3D 공간
2.  **Camera (카메라):** 장면을 바라보는 시점 (`PerspectiveCamera` 사용)
3.  **Renderer (영사기):** 카메라에 담긴 장면을 웹 브라우저(`canvas`)에 그려주는 도구

## 💻 코드 로직 분석

### 1. Mesh 생성 (물체 만들기)
물체는 항상 **뼈대(Geometry)**와 **재질(Material)**이 합쳐져야 합니다.
```javascript
const geometry = new THREE.BoxGeometry(); // 모양: 정육면체
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 재질: 초록색
const cube = new THREE.Mesh(geometry, material); // 결합!
scene.add(cube); // 무대에 배치


2. Animation Loop (움직임 만들기)
requestAnimationFrame을 사용하여 1초에 약 60번씩 화면을 새로 그립니다.

JavaScript

function animate() {
  requestAnimationFrame(animate); // 무한 반복 예약
  
  // 큐브를 매 프레임마다 조금씩 회전시킴
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera); // 촬영(렌더링)
}