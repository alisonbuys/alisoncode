import Link from "next/link";
import { DesignApp } from "~/components/designapp/designapp";

export default function DesignAppPage() {
  return (
    <div>
      <Link
        className="rounded-lg border border-black bg-slate-200 p-2 hover:bg-slate-400"
        href="/"
      >
        Home
      </Link>
      <div className="container mx-auto max-w-md  ">
        <DesignApp />
      </div>
    </div>
  );
}
