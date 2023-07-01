"use client";
import { ClientDataLinkType } from "@/app/types";
import Link from "next/link";

const LinksBox: React.FC<ClientDataLinkType> = ({ label, url }) => {
  return (
    <Link
      href={url as string}
      target="_blank"
      className="py-2 px-4 text-xs rounded-xl bg-gray-100 w-fit"
    >
      <span className="text-gray-500">{label}</span>
    </Link>
  );
};

export default LinksBox;
