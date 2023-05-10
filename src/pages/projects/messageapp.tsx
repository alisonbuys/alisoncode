// export { MessageApp } from "~/components/message";

import Link from "next/link";
import { MessageApp } from "~/components/messageapp/message";

export default function MessageAppPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto max-w-md">
        <MessageApp />
      </div>
    </div>
  );
}
