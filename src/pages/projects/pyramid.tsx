// export { MessageApp } from "~/components/message";

import { BackButton } from "~/components/BackButton";
import PyramidApp from "~/components/pyramidapp/pyramid";

export default function PyramidAppPage() {
  return (
    <div className=" h-full w-screen bg-gradient-to-b from-sky-200 from-30% via-sky-300 via-70% to-teal-300 to-90% ">
      <BackButton />
      <PyramidApp />
    </div>
  );
}
