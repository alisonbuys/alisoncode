import { createRoot, type Vector3 } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere(props: { position: Vector3 }) {
  const sphereRef = useRef<any>();

  return (
    <>
      <mesh ref={sphereRef} position={props.position} scale={0.95}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}
