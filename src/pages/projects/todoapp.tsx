// export { MessageApp } from "~/components/message";

import { TodoApp } from "~/components/todoapp/todoapp";

export default function ProjectPage() {
  return (
    <div className="container m-5 mx-auto rounded-lg bg-neutral-100 p-5">
      <TodoApp />
    </div>
  );
}
