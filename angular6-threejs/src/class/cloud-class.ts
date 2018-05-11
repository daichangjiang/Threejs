import { ColorClass } from "src/class/color-class";
import * as THREE from 'three'

export class CloudClass {
    mesh: any;
    constructor() {
        //create an empty container that will hold the different parts of the cloud
        this.mesh = new THREE.Object3D();
        //create a cube geometry
        let geom = new THREE.BoxGeometry(20, 20, 20)
        let mat = new THREE.MeshPhongMaterial({
            color: ColorClass.white
        })
        //duplicate the geometry a random number of times
        let nBlocs = 3 + Math.floor(Math.random() * 3)
        for (let i = 0; i < nBlocs; i++) {
            var m = new THREE.Mesh(geom, mat)
            m.position.x = i * 15
            m.position.y = Math.random() * 10
            m.position.z = Math.random() * 10
            m.rotation.z = Math.random() * Math.PI * 2
            m.rotation.y = Math.random() * Math.PI * 2

            //set the size of the cube randomly
            var s = .1 + Math.random() * .9
            m.scale.set(s, s, s)

            //allow each cube to cast and to receive shadows
            m.castShadow = true
            m.receiveShadow = true

            //add the cube to the container
            this.mesh.add(m)

        }
    }
}
