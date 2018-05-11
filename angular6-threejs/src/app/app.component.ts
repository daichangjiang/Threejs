import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { ColorClass } from '../class/color-class';
import { RenderObjectClass } from '../class/render-object-class';
import { SeaClass } from '../class/sea-class';
import { SkyClass } from '../class/sky-class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    renderObject: RenderObjectClass = new RenderObjectClass()
    ngOnInit() {
        this.init()
    };

    init() {
        this.createScene()
        this.createLights()
        this.createPlane()
        this.createSea()
        this.createSky()
        this.loop()
        this.renderObject.renderer.render(this.renderObject.scene, this.renderObject.camera);
    };

    //set up the scene, the camera and the renderer
    createScene() {
        this.renderObject.HEIGHT = window.innerHeight
        this.renderObject.WIDTH = window.innerWidth

        //Create the scene
        this.renderObject.scene = new THREE.Scene()
        this.renderObject.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950)

        //Create the camera
        this.renderObject.aspectRatio = this.renderObject.WIDTH / this.renderObject.HEIGHT
        this.renderObject.fieldOfView = 60
        this.renderObject.nearPlane = 1
        this.renderObject.farPlane = 10000

        this.renderObject.camera = new THREE.PerspectiveCamera(
            this.renderObject.fieldOfView,
            this.renderObject.aspectRatio,
            this.renderObject.nearPlane,
            this.renderObject.farPlane
        )

        this.renderObject.camera.position.x = 0
        this.renderObject.camera.position.y = 200
        this.renderObject.camera.position.z = 100
        //this.renderObject.camera.lookAt(this.renderObject.scene.position)

        //create the renderer
        this.renderObject.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        })

        //Define the size of the renderer,
        this.renderObject.renderer.setSize(this.renderObject.WIDTH, this.renderObject.HEIGHT)

        this.renderObject.renderer.shadowMap.enabled = true

        this.renderObject.container = document.getElementById("world")
        this.renderObject.container.appendChild(
            this.renderObject.renderer.domElement
        )
        window.addEventListener('resize', () => {
            this.handleWindowResize()
        }, false)
    };

    //add the lights
    createLights() {
        //A hemisphere light is a gradient colored light
        this.renderObject.hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9)
        this.renderObject.shadowLight = new THREE.DirectionalLight(0xffffff, .9)
        this.renderObject.shadowLight.position.set(150, 350, 350)
        this.renderObject.shadowLight.castShadow = true

        //define the visible area of the projected shadow
        this.renderObject.shadowLight.shadow.camera.left = -400
        this.renderObject.shadowLight.shadow.camera.right = 400;
        this.renderObject.shadowLight.shadow.camera.top = 400;
        this.renderObject.shadowLight.shadow.camera.bottom = -400;
        this.renderObject.shadowLight.shadow.camera.near = 1;
        this.renderObject.shadowLight.shadow.camera.far = 1000;

        this.renderObject.shadowLight.shadow.mapSize.width = 2048;
        this.renderObject.shadowLight.shadow.mapSize.height = 2048;

        //to active the lights, just add them to the scene
        this.renderObject.scene.add(this.renderObject.hemisphereLight);
        this.renderObject.scene.add(this.renderObject.shadowLight);
    };

    //add the objects
    createPlane() {
        
    };
    createSea() {
        this.renderObject.sea = new SeaClass()
        this.renderObject.sea.mesh.position.y = -600;
        this.renderObject.scene.add(this.renderObject.sea.mesh)
    };
    createSky() {
        this.renderObject.sky = new SkyClass()
        this.renderObject.sky.mesh.position.y = -600
        this.renderObject.scene.add(this.renderObject.sky.mesh)
    };


    //start a loop that will update the objects' positions
    // and render the scene on each frame
    loop() {

    };
    handleWindowResize() {
        this.renderObject.HEIGHT = window.innerHeight;
        this.renderObject.WIDTH = window.innerWidth;
        this.renderObject.renderer.setSize(this.renderObject.WIDTH, this.renderObject.HEIGHT);
        this.renderObject.camera.aspect = this.renderObject.WIDTH / this.renderObject.HEIGHT;
        this.renderObject.camera.updateProjectionMatrix();
    }
}
