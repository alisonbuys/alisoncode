// export { MessageApp } from "~/components/message";

import Link from "next/link";
import ThreeDApp from "~/components/threed/threed";

export default function ThreedAppPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto h-screen w-screen bg-gray-800">
        <ThreeDApp />
      </div>
    </div>
  );
}
