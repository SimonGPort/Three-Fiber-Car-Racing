import './App.css';
import { Canvas, useFrame} from 'react-three-fiber'
import { useRef, useState } from "react"
import Car from "./Car.js"


function Car2(){
  return(
    <mesh position={[0,0.5,0]}>
    <boxBufferGeometry  args={[1,1,3]}  />
    <meshStandardMaterial color="blue"/>
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
<Car />
<Car2 />
<Ground/>
</Canvas>
</>
  );
}

export default App;
