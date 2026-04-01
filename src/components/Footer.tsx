"use client";

import Link from "next/link";

export default function Header() {
  return (
    <footer className="bg-zinc-950 w-full relative overflow-hidden pt-20 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start px-12 max-w-7xl mx-auto gap-12 relative z-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <span
              className="material-symbols text-primary text-3xl"
              data-icon="explore"
            >
              explore
            </span>
            <span className="text-2xl font-black text-white font-headline tracking-tighter uppercase">
              Știința Electro Sistem
            </span>
          </div>
          <p className="text-zinc-500 font-body leading-relaxed">
            Dedicat evoluției orientării ca disciplină de înaltă performanță.
            Navigație precisă. Atletism de elită.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <h6 className="text-white font-label font-black tracking-widest text-xs uppercase mb-6">
              Explorează
            </h6>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-zinc-500 hover:text-primary transition-colors font-label text-sm uppercase font-bold"
                  href="/"
                >
                  Acasă
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-500 hover:text-primary transition-colors font-label text-sm uppercase font-bold"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-500 hover:text-primary transition-colors font-label text-sm uppercase font-bold"
                  href="/evenimente"
                >
                  Evenimente
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-label font-black tracking-widest text-xs uppercase mb-6">
              Club
            </h6>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-zinc-500 hover:text-primary transition-colors font-label text-sm uppercase font-bold"
                  href="/galerie"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-500 hover:text-primary transition-colors font-label text-sm uppercase font-bold"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="text-zinc-500 hover:text-primary transition-colors font-label text-sm uppercase font-bold">
                  Înscrie-te
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h6 className="text-white font-label font-black tracking-widest text-xs uppercase mb-6">
              Conectează-te
            </h6>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols" data-icon="share">
                  share
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols" data-icon="mail">
                  mail
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 font-label text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Știința Electro Sistem. Calea Kinetică.
        </p>
        <div className="flex gap-8">
          <Link
            className="text-zinc-600 hover:text-white text-[0.6rem] font-bold tracking-widest uppercase"
            href="/politica-de-confidentialitate"
          >
            Politică de Confidențialitate
          </Link>
          <Link
            className="text-zinc-600 hover:text-white text-[0.6rem] font-bold tracking-widest uppercase"
            href="termeni-si-conditii"
          >
            Termeni și Condiții
          </Link>
        </div>
      </div>
      <span className="text-6xl md:text-9xl font-black opacity-5 absolute -bottom-4 right-4 text-white uppercase font-headline pointer-events-none select-none">
        ȘTIINȚA ELECTRO SISTEM
      </span>
    </footer>
  );
}
