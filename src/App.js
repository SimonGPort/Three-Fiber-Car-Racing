import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame} from 'react-three-fiber'
import { useRef, useState } from "react"


function Ball(){
return(
<mesh position={[0,5,0]}>
<sphereBufferGeometry  args={[1.5,50,100]}   />
<meshStandardMaterial  color="hotpink"/>
</mesh>
)
}

function Car2(){
  return(
    <mesh position={[0,0.5,0]}>
    <boxBufferGeometry  args={[1,1,3]}  />
    <meshStandardMaterial color="blue"/>
    </mesh>
    )
}

function Car(){
let [ForwardKeydown,setForwardKeydown]=useState("")
let [turnKeydown,setTurnKeydown]=useState("")
let [angle,setAngle]=useState(0)


  const mesh=useRef(null)

  document.addEventListener("keydown", (event)=>{
    if(event.code==="KeyW" || event.code==="KeyS"){
      setForwardKeydown(event.code)
    }
    if(event.code==="KeyA" || event.code==="KeyD"){
      setTurnKeydown(event.code)
    }
  })
  document.addEventListener("keyup", (event)=>{
    if(event.code==="KeyW" || event.code==="KeyS"){
      setForwardKeydown("")
    }
    if(event.code==="KeyA" || event.code==="KeyD"){
      setTurnKeydown("")
    }

  })
useFrame(()=>{

  if(ForwardKeydown==="KeyW"){
    console.log("angle:",angle)
    let zDistance=0.1*Math.cos(angle/360*2*Math.PI)
    let xDistance=0.1*Math.sin(angle/360*-2*Math.PI)
    mesh.current.position.z +=zDistance
    mesh.current.position.x +=xDistance
  }
  if(ForwardKeydown==="KeyS"){
    let zDistance=-0.1*Math.cos(angle/360*2*Math.PI)
    let xDistance=0.1*Math.sin(angle/360*2*Math.PI)
    mesh.current.position.z +=zDistance
    mesh.current.position.x +=xDistance
  }
  if(turnKeydown==="KeyA"){
    mesh.current.rotation.y +=0.05

let angle=Math.abs(mesh.current.rotation.y)/6.3
  while (angle > 1) {
    angle=angle-1
  }
angle=angle*360
    setAngle(angle)
  }
  if(turnKeydown==="KeyD"){
    mesh.current.rotation.y -=0.05

    let angle=Math.abs(mesh.current.rotation.y)/6.3
    while (angle > 1) {
      angle=angle-1
    }
  angle=angle*360
      setAngle(angle)
  }
})

  return(
  <mesh position={[0,0.5,0]} ref={mesh}>
  <boxBufferGeometry  args={[1,1,3]}  />
  <meshStandardMaterial color="hotpink"/>
  </mesh>
  )
  }

  function Ground(){
    const mesh=useRef(null)

useFrame(()=>{
  mesh.current.rotation.x =11
})

    return(
    <mesh position={[0,0,0]} ref={mesh}>
    <planeBufferGeometry  args={[100,100]}  />
    <meshStandardMaterial color="green"/>
    </mesh>
    )
    }

  function OrientationCamera(camera){


useFrame(({camera})=>{
  camera.rotation.x =0.01
       console.log("camera:",camera)
})
    return null
  }



function App() {

  return (
<>
<Canvas camera={{position:[0,100,100],fov:10}} style={{height:"100vh"}}>
  {/* <OrientationCamera /> */}
  <ambientLight/>
{/* <Ball/> */}
<Car />
<Car2 />
<Ground/>
</Canvas>
</>
  );
}

export default App;
