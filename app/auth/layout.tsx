import Link from "next/link";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid place-items-center bg-white h-full magicpattern">
      <div className="w-full h-full bg-white p-5 overflow-hidden space-y-3 md:rounded-xl md:shadow-xl md:w-fit md:h-fit md:min-w-[400px] md:border">
        <Link className="text-xs text-gray-500" href="/">
          &#8592; Back home
        </Link>
        {children}
      </div>
    </div>
  );
}
