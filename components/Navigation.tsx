import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="text-xl text-green-700 sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex gap-6 md:gap-10 border-b border-gray-200 ">
      <Link href="/">
        <a>Chia Power</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};
