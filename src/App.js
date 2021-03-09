import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame} from 'react-three-fiber'


function Ball(){
return(
<mesh position={[0,5,0]}>
<sphereBufferGeometry  args={[1.5,50,100]}   />
<meshStandardMaterial  color="hotpink"/>
</mesh>
)
}

function Cube(){
  return(
  <mesh position={[0,0,0]}>
  <boxBufferGeometry  agrs={[1,1,1]}  />
  <meshStandardMaterial />
  </mesh>
  )
  }

  function OrientationCamera(camera){


useFrame(({camera})=>{
  camera.rotation.x =0.0033
       console.log("camera:",camera)
})
    return null
  }



function App() {

  return (
<>
<Canvas camera={{position:[0,0,150],fov:10}} style={{height:"100vh"}}>
  <OrientationCamera />
  <ambientLight/>
<Ball/>
<Cube />
</Canvas>
</>
  );
}

export default App;
