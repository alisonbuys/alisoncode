import Link from "next/link";
import { ReactNode } from "react";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="m-5 flex gap-4 rounded-lg bg-purple-200 p-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
      </div>

      <div className="m-5 rounded-lg bg-neutral-100 p-5">{props.children}</div>
    </>
  );
}
