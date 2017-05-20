import * as THREE from 'three'

export default class World {

  constructor(domElement) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000);
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.uniforms = {};
    this.camera = null;
    domElement.appendChild(this.renderer.domElement);
    this.initCamera();

    // this.addCubes();
    this.addLight();
    this.addShader(); //uncom

    this.resize();

    requestAnimationFrame(this.render.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  update() {

    this.uniforms.time.value += 0.005;

    this.scene.traverse((child) => {
      if (child.name.toLowerCase() === 'cube') {
        child.rotation.y += 0.05;
      }
    });
  }

  onTexLoad(texture) {
    this.uniforms.textureSampler.value = texture;

    let plane = new THREE.PlaneBufferGeometry(2,2);

    let material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent
    });

    let shader = new THREE.Mesh( plane, material );
    this.scene.add(shader);

  };
  addShader() {

    this.uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      mouse: { type: "v2", value: new THREE.Vector2() },
      drag: { type: "v2", value: new THREE.Vector2(0,0) },
      scale: { type: "f", value: 0.0 },
      textureSampler: { type: "t", value: null }
    };

    this.loader = new THREE.TextureLoader();
    this.loader.setCrossOrigin("anonymous");
    this.loader.load("https://s3.amazonaws.com/codepen-az/dino-2.jpg", this.onTexLoad.bind(this));


  }

  addLight() {
    let light1 = new THREE.PointLight(0xffffff, 1, 100);
    light1.position.set(0, 0, 100);
    this.scene.add(light1);

    let light2 = new THREE.AmbientLight(0x404040); // soft white light
    this.scene.add(light2);
  }

  addCubes() {
    let points = this.createRandomPoints();
    let group = new THREE.Object3D();
    let material = new THREE.MeshLambertMaterial({
      color: 0x00ff00
    });
    let geometry = new THREE.BoxGeometry(2,2,2);
    let cube = new THREE.Mesh(geometry, material);
    cube.name = "cube";
    for (var point of points) {
      let clone = cube.clone();
      clone.position.add(point);
      group.add(clone);
    }
    this.scene.add(group);
  }

  createRandomPoints() {
    let arr = [];
    let max = 30;
    for (let i = 0; i < max; i++) {
      let x = Math.random() * 100 - 50;
      let y = Math.random() * 100 - 50;
      let z = Math.random() * 100 - 50;
      arr.push(new THREE.Vector3(x,y,z));
    }
    return arr;
  }

  render() {
    this.update();
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 1;
    // this.camera = new THREE.Camera();
    // this.camera.position.z = 1;
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.uniforms.resolution.value.x = this.renderer.domElement.width;
		this.uniforms.resolution.value.y = this.renderer.domElement.height;
  }
}
