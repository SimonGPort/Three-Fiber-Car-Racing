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

function Car(){
let [keydown,setKeydown]=useState("")


  const mesh=useRef(null)

  document.addEventListener("keydown", (event)=>{
    setKeydown(event.code)
  })
  document.addEventListener("keyup", (event)=>{
    setKeydown("")
  })
useFrame(()=>{
  if(keydown==="KeyW"){
    mesh.current.position.z +=0.1
  }
  if(keydown==="KeyS"){
    mesh.current.position.z -=0.1
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
<Ground/>
</Canvas>
</>
  );
}

export default App;
