import { useThree, extend, type Vector3 } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube(props: { position: Vector3 }) {
  const { camera, gl } = useThree();
  const cubeRef = useRef<any>();

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <mesh ref={cubeRef} position={props.position} scale={0.95}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
