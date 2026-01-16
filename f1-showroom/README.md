### 2. `f1-showroom/README.md` 작성 내용
**목표:** 외부 모델 로딩 시 발생하는 문제(경로, CORS) 해결 방법과 로더 사용법 설명하기

```markdown
# 🏎️ F1 Showroom (GLB Loader)

외부에서 제작된 고품질 3D 모델(`.glb`)을 웹으로 불러와 전시하는 쇼룸 프로젝트입니다.
`GLTFLoader`를 사용하며, 외부 라이브러리 참조 문제를 해결하기 위해 **Import Map** 기술을 적용했습니다.

## 🛠️ 주요 기술 스택

* **GLTFLoader:** JSON 기반의 3D 파일 포맷인 glTF/glb 파일을 비동기로 로드합니다.
* **Import Map:** ES Module 사용 시 발생하는 경로 참조 에러를 해결하기 위한 최신 웹 표준 기술입니다.
* **OrbitControls:** 마우스 드래그로 모델을 360도 회전하고 줌인/줌아웃 할 수 있습니다.

## ⚠️ 트러블 슈팅 (중요!)

### 1. Import Map 적용 이유
`GLTFLoader` 내부에서 `import ... from 'three'` 구문을 사용하는데, 브라우저는 `'three'`가 어디인지 모르기 때문에 에러가 발생합니다. 이를 해결하기 위해 지도를 제공해야 합니다.

```html
<script type="importmap">
  {
    "imports": {
      "three": "[https://unpkg.com/three@0.160.0/build/three.module.js](https://unpkg.com/three@0.160.0/build/three.module.js)",
      "three/addons/": "[https://unpkg.com/three@0.160.0/examples/jsm/](https://unpkg.com/three@0.160.0/examples/jsm/)"
    }
  }
</script>
2. CORS 및 모델 경로 문제
GitHub Repository의 Raw 파일을 직접 가져올 때 CORS 보안 정책이나 MIME 타입 오류가 발생할 수 있습니다.

해결: raw.githubusercontent.com 대신 Three.js 공식 예제 서버나 Khronos Group의 표준 샘플 URL을 사용하여 안정성을 확보했습니다.

💻 모델 로딩 코드 예시
JavaScript

const loader = new GLTFLoader();
loader.load('모델_URL.glb', function (gltf) {
    const car = gltf.scene;
    car.scale.set(0.1, 0.1, 0.1); // 크기 조절
    scene.add(car); // 로딩 완료 후 무대에 추가
});

---

### 👨‍💻 적용 및 업로드 방법

이제 VS Code에서 각 파일을 열어 위의 내용을 붙여넣고 저장하세요.
그다음 터미널에서 아래 명령어로 깃허브에 올리시면 됩니다!

```bash
git add .
git commit -m "Docs: 각 프로젝트별 상세 README 작성 완료"
git push