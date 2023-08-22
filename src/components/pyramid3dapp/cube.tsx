import { type Vector3 } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube(props: { position: Vector3 }) {
  const cubeRef = useRef<any>();

  return (
    <>
      <mesh ref={cubeRef} position={props.position} scale={0.95}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
