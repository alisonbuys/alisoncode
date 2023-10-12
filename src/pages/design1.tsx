import { BackButton } from "~/components/BackButton";

export default function Figma() {
  return (
    <>
      <BackButton />
      <iframe
        className=" h-screen w-screen"
        width="full"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1UhLJNXThX2gMWvWoFsU4G%2FFauxica-(Community)%3Ftype%3Ddesign%26node-id%3D1-2%26t%3DZwAZgepwTYYoQQnw-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26mode%3Ddesign"
        allowFullScreen
      ></iframe>
    </>
  );
}
