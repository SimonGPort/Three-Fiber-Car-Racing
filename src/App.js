import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber'
import { useRef, useState, useEffect } from "react"


function Ball() {
  return (
    <mesh position={[0, 5, 0]}>
      <sphereBufferGeometry args={[1.5, 50, 100]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

let speed = 0

function Car() {
  // let [speed, setSpeed] = useState(0)
  let [stop, setStop] = useState(false)

  useEffect(() => {
    console.log("speed:", speed)
    console.log("stop:", stop)
    if (stop === true && speed !== 0) {
      if (speed > 0) {
        if (speed < 0.2) {
          // setSpeed(0)
          speed = 0
          setStop(false)
        } else {
          let newSpeed = speed -= 0.2
          // setSpeed(newSpeed)
          speed = newSpeed
        }
      }
      if (speed < 0) {
        setTimeout(slowDown(), 5000)
      }

    }
  }, [speed, stop])

  function slowDown(){
    console.log("speedSlow:",speed)
    if (speed > -0.2) {
      speed = 0
    } else {
      speed += 0.1
      setTimeout(slowDown(), 5000)
    }
  }

  const mesh = useRef(null)

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {

      setStop(false)
      if (speed > 0.3) { return } else {
        let newSpeed = speed += 0.01
        // setSpeed(newSpeed)
        speed = newSpeed
      }
    }
    if (event.code === "KeyS") {
      setStop(false)
      if (speed < -0.3) { return } else {
        let newSpeed = speed -= 0.01
        // setSpeed(newSpeed)
        speed = newSpeed
      }

    }

  })
  document.addEventListener("keyup", (event) => {
    console.log("keyup")
    setStop(true)
  })
  useFrame(() => {
    if (speed !== 0) {
      mesh.current.position.z += speed
    }
  })

  return (
    <mesh position={[0, 0.5, 0]} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 3]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function Ground() {
  const mesh = useRef(null)

  useFrame(() => {
    mesh.current.rotation.x = 11
  })

  return (
    <mesh position={[0, 0, 0]} ref={mesh}>
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

function OrientationCamera(camera) {


  useFrame(({ camera }) => {
    camera.rotation.x = 0.01
    console.log("camera:", camera)
  })
  return null
}



function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 200, 100], fov: 10 }} style={{ height: "100vh" }}>
        {/* <OrientationCamera /> */}
        <ambientLight />
        {/* <Ball/> */}
        <Car />
        <Ground />
      </Canvas>
    </>
  );
}

export default App;
