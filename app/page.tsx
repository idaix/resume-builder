import Link from "next/link";
import Button from "./components/Button";
import HomeNav from "./components/HomeNav";

export default function Home() {
  return (
    <main className="h-full grid place-items-center text-gray-500">
      <HomeNav />
      <Button
        asLink
        href="/create"
        label="Get Started"
        type="button"
        bg="gradient"
        size="large"
      />
    </main>
  );
}
