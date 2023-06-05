// export { MessageApp } from "~/components/message";

import Link from "next/link";
import PyramidApp from "~/components/pyramidapp/pyramid";

export default function PyramidAppPage() {
  return (
    <div className="bg-sky-300">
      <Link href="/">Home</Link>
      <div className="container mx-auto ">
        <PyramidApp />
      </div>
    </div>
  );
}
