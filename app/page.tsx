import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full grid place-items-center">
      <Link
        className="py-2 px-5 bg-gradient-to-tr from-fuchsia-500 to-orange-400 rounded-lg font-semibold text-white"
        href="/create"
      >
        Get Started
      </Link>
    </main>
  );
}
