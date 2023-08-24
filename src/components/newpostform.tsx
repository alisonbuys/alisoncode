import { useState } from "react";
import { api } from "~/utils/api";

export default function NewPostForm() {
  const [title, title_set] = useState("");
  const [content, content_set] = useState("");
  const create_post = api.example.createpost.useMutation();
  const listposts = api.example.listposts.useQuery();

  return (
    <section className="flex flex-col gap-4 mx-4 rounded-lg border bg-slate-300 p-4">
      Todo title:
      <input
        value={title}
        onChange={(e) => {
          title_set(e.target.value);
        }}
        className="rounded border"
      />
      content:
      <textarea
        value={content}
        onChange={(e) => {
          content_set(e.target.value);
        }}
        className="rounded border"
      />
      <button
        className="rounded-3xl w-60 bg-pink-400 px-2 hover:bg-pink-500 mx-auto transition text-white py-2"
        onClick={() => {
          create_post.mutate(
            { title, content },
            {
              onSuccess: () => {
                listposts.refetch().catch(console.error);
              },
            }
          );
        }}
      >
       + Add Todo
      </button>
    </section>
  );
}