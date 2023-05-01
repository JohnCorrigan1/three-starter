import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} />
      <OrbitControls autoRotate />
      <Environment preset="apartment" background blur={0.5} />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
