import { type ReactNode } from "react";

export default function SearchbarPage(props: { children: ReactNode }) {
  return (
    <>
      <div>
        <div className="rounded-3xl bg-white p-2 pl-6 ">Search</div>
      </div>
      <div className="">{props.children}</div>
    </>
  );
}
