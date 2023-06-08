// export { MessageApp } from "~/components/message";

import Link from "next/link";
import { TodoApp } from "~/components/todoapp/todoapp";

export default function ProjectPage() {
  return (
    <div>
      <Link
        className="rounded-lg border border-black bg-slate-200 p-2 hover:bg-slate-400"
        href="/"
      >
        Home
      </Link>
      <div className="container mx-auto max-w-md">
        <TodoApp />
      </div>
    </div>
  );
}
