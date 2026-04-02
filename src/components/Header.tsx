"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  onOpenModal: () => void;
};

export default function Header({ onOpenModal }: Props) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(34,145,209,0.06)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols text-primary text-2xl"
            data-icon="explore"
          >
            explore
          </span>
          <h1 className="text-lg font-black italic tracking-widest text-zinc-900 uppercase font-headline">
            Stiința Electro Sistem
          </h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            className={`${
              pathname === "/"
                ? "text-primary border-b-2 border-primary pb-1 font-bold"
                : "text-zinc-600 hover:text-primary"
            } font-lexend tracking-tighter uppercase`}
            href="/"
          >
            Acasă
          </Link>
          <Link
            className={`${
              pathname === "/blog"
                ? "text-primary border-b-2 border-primary pb-1 font-bold"
                : "text-zinc-600 hover:text-primary"
            } font-lexend tracking-tighter uppercase`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${
              pathname === "/evenimente"
                ? "text-primary border-b-2 border-primary pb-1 font-bold"
                : "text-zinc-600 hover:text-primary"
            } font-lexend tracking-tighter uppercase`}
            href="/evenimente"
          >
            Evenimente
          </Link>
          <Link
            className={`${
              pathname === "/galerie"
                ? "text-primary border-b-2 border-primary pb-1 font-bold"
                : "text-zinc-600 hover:text-primary"
            } font-lexend tracking-tighter uppercase`}
            href="/galerie"
          >
            Galerie
          </Link>
          <Link
            className={`${
              pathname === "/contact"
                ? "text-primary border-b-2 border-primary pb-1 font-bold"
                : "text-zinc-600 hover:text-primary"
            } font-lexend tracking-tighter uppercase`}
            href="/contact"
          >
            Contact
          </Link>
          <button
            onClick={onOpenModal}
            className="bg-primary text-on-primary px-6 py-2 font-label text-[0.75rem] font-bold tracking-[0.1rem] rounded-md uppercase hover:opacity-80 transition-opacity"
          >
            ÎNSCRIE-TE
          </button>
        </nav>
        <button className="md:hidden text-primary">
          <span className="material-symbols text-3xl" data-icon="menu">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}
