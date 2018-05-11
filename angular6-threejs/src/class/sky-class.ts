import * as THREE from 'three'
import { CloudClass } from './cloud-class';
export class SkyClass {
    mesh: any;
    nClouds: number;
    constructor() {
        this.mesh = new THREE.Object3D()
        this.nClouds = 20
        var stepAngle = Math.PI * 2 / this.nClouds
        for (let i = 0; i < this.nClouds; i++) {
            var c = new CloudClass()

            //set the rotation and the position of each cloud
            //for that we use a bit of trigonometry
            var a = stepAngle * i
            var h = 750 * Math.random() * 200
            c.mesh.position.y = Math.sin(a) * h
            c.mesh.position.x = Math.cos(a) * h
            c.mesh.rotation.z = a + Math.PI / 2
            c.mesh.position.z = -400 - Math.random() * 400
            var s = 1 + Math.random() * 2
            c.mesh.scale.set(s, s, s)
            this.mesh.add(c.mesh)
        }
    }
}
