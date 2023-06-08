// export { MessageApp } from "~/components/message";

import Link from "next/link";
import { MessageApp } from "~/components/messageapp/message";

export default function MessageAppPage() {
  return (
    <div>
      <Link
        className="rounded-lg border border-black bg-slate-200 p-2 hover:bg-slate-400"
        href="/"
      >
        Home
      </Link>
      <div className="container mx-auto max-w-md">
        <MessageApp />
      </div>
    </div>
  );
}
