// export { MessageApp } from "~/components/message";

import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import Cube from "~/components/pyramid3dapp/cube";
import Pyramid3dApp from "~/components/pyramid3dapp/pyramid3d";

export default function Pyramid3dAppPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto">
        <Pyramid3dApp />
      </div>
    </div>
  );
}
