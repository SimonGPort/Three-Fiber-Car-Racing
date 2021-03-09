import logo from './logo.svg';
import './App.css';
import { Canvas} from 'react-three-fiber'


function Ball(){
return(
<mesh position={[0,10,0]}>
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




function App() {
  return (
<>
<Canvas camera={{position:[0,40,10],fov:10}} style={{height:"100vh"}}>
  <ambientLight/>
<Ball/>
<Cube />
</Canvas>
</>
  );
}

export default App;
