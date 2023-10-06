import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export function BackButton() {
  return (
    <Link href={"~/scenes/ourClasses"}>
      <IoArrowBackCircleSharp />
    </Link>
  );
}
