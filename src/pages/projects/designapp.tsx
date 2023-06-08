import Link from "next/link";
import { DesignApp } from "~/components/designapp/designapp";

export default function DesignAppPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className="container mx-auto max-w-md">
        <DesignApp />
      </div>
    </div>
  );
}
