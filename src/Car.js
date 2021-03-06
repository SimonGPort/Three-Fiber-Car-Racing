import { Canvas, useFrame } from 'react-three-fiber'
import { useRef, useState, useEffect } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Car() {
    let [ForwardKeydown, setForwardKeydown] = useState("")
    let [turnKeydown, setTurnKeydown] = useState("")
    let [angle, setAngle] = useState(0)
    let [model, setModel] = useState()


    useEffect(() => {
        new GLTFLoader().load('/car3d/scene.gltf', setModel)
    },[])

    const mesh = useRef(null)

    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyW" || event.code === "KeyS") {
            setForwardKeydown(event.code)
        }
        if (event.code === "KeyA" || event.code === "KeyD") {
            setTurnKeydown(event.code)
        }
    })
    document.addEventListener("keyup", (event) => {
        if (event.code === "KeyW" || event.code === "KeyS") {
            setForwardKeydown("")
        }
        if (event.code === "KeyA" || event.code === "KeyD") {
            setTurnKeydown("")
        }

    })
    useFrame(() => {

        if (ForwardKeydown === "KeyW") {
            let zDistance = 0.1 * Math.cos(angle / 360 * 2 * Math.PI)
            let xDistance = 0.1 * Math.sin(angle / 360 * -2 * Math.PI)
            mesh.current.position.z += zDistance
            mesh.current.position.x += xDistance
        }
        if (ForwardKeydown === "KeyS") {
            let zDistance = -0.1 * Math.cos(angle / 360 * 2 * Math.PI)
            let xDistance = 0.1 * Math.sin(angle / 360 * 2 * Math.PI)
            mesh.current.position.z += zDistance
            mesh.current.position.x += xDistance
        }
        if (turnKeydown === "KeyA") {
            mesh.current.rotation.y += 0.05
            let angle = Math.abs(mesh.current.rotation.y) / 6.3
            while (angle > 1) {
                angle = angle - 1
            }
            angle = angle * 360
            if(mesh.current.rotation.y >0){
                angle=360-angle
            }
            setAngle(angle)
        }
        if (turnKeydown === "KeyD") {
            mesh.current.rotation.y -= 0.05

            let angle = Math.abs(mesh.current.rotation.y) / 6.3
            while (angle > 1) {
                angle = angle - 1
            }
            angle = angle * 360
            if(mesh.current.rotation.y >0){
                angle=360-angle
            }
            setAngle(angle)
        }
    })

    return (

        <mesh >
            { model ? <group ref={mesh} ><primitive object={model.scene} scale={[0.01,0.01,0.01]}  position={[0, 0.5, 0]} /></group> : null}
        </mesh>

    )
}