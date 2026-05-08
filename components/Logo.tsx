import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="logoLink" aria-label="Ir al inicio de Solar Supply">
      <Image
        src="/brand/logo-solarsupply.png"
        alt="Solar Supply"
        width={compact ? 190 : 250}
        height={compact ? 58 : 76}
        priority
        className="logoImage"
      />
    </Link>
  );
}
