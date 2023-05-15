// export { MessageApp } from "~/components/message";

import Link from "next/link";
import { MessageApp } from "~/components/messageapp/message";
import ThreeDApp from "~/components/threed/threed";

export default function ThreeAppPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto h-screen w-screen bg-gray-800">
        <ThreeDApp />
      </div>
    </div>
  );
}
