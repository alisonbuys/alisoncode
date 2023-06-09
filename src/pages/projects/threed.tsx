// export { MessageApp } from "~/components/message";

import Link from "next/link";
import ThreeDApp from "~/components/threed/threed";

export default function ThreedAppPage() {
  return (
    <div>
      <Link
        className="rounded-lg border border-black bg-slate-200 p-2 hover:bg-slate-400"
        href="/"
      >
        Home
      </Link>
      <div className="container mx-auto h-screen w-screen bg-gray-800 pt-4">
        <ThreeDApp />
      </div>
    </div>
  );
}
