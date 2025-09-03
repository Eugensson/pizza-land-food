import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="max-w-40 lg:max-w-max">
      <Image src="/logo.svg" alt="Logo" width={180} height={180} />
    </Link>
  );
};
