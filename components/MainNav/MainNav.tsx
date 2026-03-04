import Link from "next/link";
import Image from "next/image";

export default function MainNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/decleanup_logo_full.png"
              alt="DeCleanup"
              width={140}
              height={44}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
