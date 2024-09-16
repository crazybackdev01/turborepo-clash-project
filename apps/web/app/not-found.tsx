import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <Image src={"/404-error.svg"} width={700} height={700} alt="error" />
    </div>
  );
}
