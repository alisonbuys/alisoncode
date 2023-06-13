// export { MessageApp } from "~/components/message";

import { MessageApp } from "~/components/messageapp/message";

export default function MessageAppPage() {
  return (
    <div className="container m-5 mx-auto rounded-lg bg-neutral-100 p-5">
      <MessageApp />
    </div>
  );
}
