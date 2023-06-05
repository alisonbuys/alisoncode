// export { MessageApp } from "~/components/message";

import Link from "next/link";
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
