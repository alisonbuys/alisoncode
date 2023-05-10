// export { MessageApp } from "~/components/message";

import Link from "next/link";
import { TodoApp } from "~/components/todoapp/todoapp";

export default function ProjectPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto max-w-md">
        <TodoApp />
      </div>
    </div>
  );
}
