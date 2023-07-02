"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const HomeNav = () => {
  const { data: session } = useSession();
  return (
    <nav className="fixed top-0 w-full py-3 px-5 flex justify-between items-center">
      <Link
        href="https://github.com/daishek"
        className="font-monohover:text-black"
      >
        🐺DA!
      </Link>
      {session ? (
        <button onClick={() => signOut({ redirect: false })}>Logout</button>
      ) : (
        <Link className="hover:text-black" href="/auth/login">
          Login
        </Link>
      )}
    </nav>
  );
};

export default HomeNav;
