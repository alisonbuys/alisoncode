// export { MessageApp } from "~/components/message";

import Link from "next/link";
import ThreeDApp from "~/components/threed/threed";

export default function ThreedAppPage() {
  return (
    <div>
      <div className="container mx-auto h-screen  bg-gray-800">
        <ThreeDApp />
      </div>
    </div>
  );
}
