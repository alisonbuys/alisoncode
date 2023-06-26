import { Canvas, useFrame } from "@react-three/fiber";
import Sphere from "./sphere";
import { OrbitControls } from "@react-three/drei";

export function Profile() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
      eventPrefix="client"
    >
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Sphere position={0} />
    </Canvas>
  );
}
