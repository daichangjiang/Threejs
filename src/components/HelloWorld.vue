<template>
<div id="world">

</div>
</template>

<script>
import * as THREE from "three";
export default {
  data() {
    return {
      Colors: {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xf5986e,
        brownDark: 0x23190f,
        blue: 0x68c3c0
      },
      scene: null,
      camera: null,
      fieldOfView: null,
      aspectRatio: null,
      nearPlane: null,
      farPlane: null,
      HEIGHT: null,
      WIDTH: null,
      renderer: null,
      container: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.createScene();
      this.createLights();
      this.createPlane();
      this.createSea();
      this.createSky();
      this.loop();
    },
    createScene() {
      this.HEIGHT = window.innerHeight;
      this.WIDTH = window.innerWidth;
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
      this.aspectRatio = this.WIDTH / this.HEIGHT;
      this.fieldOfView = 60;
      this.nearPlane = 1;
      this.farPlane = 1000;
      this.camera = new THREE.PerspectiveCamera(
        this.fieldOfView,
        this.aspectRatio,
        this.nearPlane,
        this.farPlane
      );
      this.camera.position.x = 0;
      this.camera.position.y = 100;
      this.camera.position.z = 200;
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      this.renderer.setSize(this.WIDTH, this.HEIGHT);
      this.renderer.shadowMap.enabled = true;
      this.container = document.getElementById("world");
      this.container.appendChild(this.renderer.domElement);
      window.addEventListener("resize", this.handleWindowResize, false);
    },
    createLights() {},
    createPlane() {},
    createSea() {},
    createSky() {},
    loop() {
      this.renderer.render(this.scene, this.camera);
    },
    handleWindowResize() {
      this.HEIGHT = window.innerHeight
      this.WIDTH = window.innerWidth
      this.renderer.setSize(this.WIDTH, this.HEIGHT)
      this.camera.aspect = this.WIDTH / this.HEIGHT
      this.camera.updateProjectionMatrix()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#world {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(#e4e0ba, #f7d9aa);
}
</style>