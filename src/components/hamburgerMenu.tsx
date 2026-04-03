"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { closeMenu } from "../store/slices/menuSlice";
import { openModal } from "../store/slices/modalSlice";

export default function MenuModal() {
  const pathname = usePathname();
  const isOpenMenu = useSelector((state: RootState) => state.menu.isOpenMenu);
  const dispatch = useDispatch();

  if (!isOpenMenu) return null;

  return (
    <div
      className="fixed inset-0 z-[110] bg-zinc-950/95 backdrop-blur-md flex flex-col active"
      id="mobile-menu"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-primary text-2xl"
            data-icon="explore"
          >
            explore
          </span>
          <h1 className="text-lg font-black italic tracking-widest text-white uppercase font-headline">
            Stiința Electro Sistem
          </h1>
        </div>
        <button
          className="text-white hover:text-[#2291D1] transition-colors"
          onClick={() => dispatch(closeMenu())}
        >
          <span
            className="material-symbols-outlined text-4xl"
            data-icon="close"
          >
            close
          </span>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <nav className="flex flex-col items-center space-y-10">
          <Link
            className={`text-4xl font-headline font-black uppercase tracking-tighter ${
              pathname === "/"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-zinc-600 hover:text-primary"
            }`}
            href="/"
            onClick={() => dispatch(closeMenu())}
          >
            Acasă
          </Link>
          <Link
            className={`text-4xl font-headline font-black uppercase tracking-tighter ${
              pathname === "/blog"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-zinc-600 hover:text-primary"
            }`}
            href="/blog"
            onClick={() => dispatch(closeMenu())}
          >
            Blog
          </Link>
          <Link
            className={`text-4xl font-headline font-black uppercase tracking-tighter ${
              pathname === "/evenimente"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-zinc-600 hover:text-primary"
            }`}
            href="/evenimente"
            onClick={() => dispatch(closeMenu())}
          >
            Evenimente
          </Link>
          <Link
            className={`text-4xl font-headline font-black uppercase tracking-tighter ${
              pathname === "/galerie"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-zinc-600 hover:text-primary"
            }`}
            href="/galerie"
            onClick={() => dispatch(closeMenu())}
          >
            Galerie
          </Link>
          <Link
            className={`text-4xl font-headline font-black uppercase tracking-tighter ${
              pathname === "/contact"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-zinc-600 hover:text-primary"
            }`}
            href="/contact"
            onClick={() => dispatch(closeMenu())}
          >
            Contact
          </Link>
        </nav>
        <button
          className="bg-[#2291D1] text-white px-10 py-4 font-label text-sm font-black tracking-[0.2rem] rounded-md uppercase mt-12"
          onClick={() => {
            dispatch(closeMenu());
            dispatch(openModal());
          }}
        >
          ÎNSCRIE-TE
        </button>
      </div>
    </div>
  );
}
