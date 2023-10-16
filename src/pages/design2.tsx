import { BackButton } from "~/components/BackButton";

export default function Figma() {
  return (
    <>
      <BackButton />
      <iframe
        className=" h-screen w-screen"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb5ZuSvvUCSyuSBj3lJWNj2%2FSocial-media-app%3Ftype%3Ddesign%26node-id%3D2-910%26t%3DL4E9FGbRzZIRL6ty-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26mode%3Ddesign"
        allowFullScreen
      ></iframe>
    </>
  );
}
