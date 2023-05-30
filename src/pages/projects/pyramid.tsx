// export { MessageApp } from "~/components/message";

import Link from "next/link";
import PyramidApp from "~/components/pyramidapp/pyramid";

export default function PyramidAppPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto max-w-md">
        <PyramidApp />
      </div>
    </div>
  );
}
