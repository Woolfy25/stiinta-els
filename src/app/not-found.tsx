import Link from "next/link";

export default function Contact() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements: Asymmetric Kinetic Design */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="topo-pattern absolute inset-0" />
          <div className="absolute -left-20 top-1/4 text-[15rem] font-black font-headline text-primary opacity-5 select-none leading-none rotate-12">
            404
          </div>
          <div className="absolute right-0 bottom-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        {/* The Content Shell */}
        <section className="relative z-10 w-full max-w-5xl px-6 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          {/* Visual Anchor: Kinetic Compass */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-125 blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="bg-surface-container-lowest p-12 rounded-full shadow-[0px_20px_40px_rgba(0,97,144,0.06)] border border-outline-variant/10">
                <span
                  className="material-symbols-outlined text-[8rem] text-primary"
                  data-icon="explore"
                >
                  explore
                </span>
              </div>
              {/* Kinetic Floating Metadata */}
              <div className="absolute -top-4 -right-4 bg-inverse-surface text-on-secondary px-3 py-1 rounded-sm font-label text-[0.65rem] tracking-widest">
                ERROR_CODE: 404
              </div>
            </div>
          </div>
          {/* Typography Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start">
            <h2 className="text-[6rem] md:text-[8rem] font-black font-headline text-primary leading-none tracking-tighter">
              404
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-4xl font-bold font-headline text-on-surface">
                Te-ai rătăcit?
              </h3>
              <p className="text-on-surface-variant max-w-md font-body text-lg leading-relaxed">
                Se pare că ai ieșit de pe traseu. Nu-ți face griji, putem găsi
                drumul împreună.
              </p>
            </div>
            <div className="mt-4">
              <Link
                className="inline-flex items-center gap-4 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform duration-200"
                href="/"
              >
                <span className="font-label font-bold tracking-widest text-[0.75rem]">
                  ÎNAPOI ACASĂ
                </span>
                <span
                  className="material-symbols-outlined"
                  data-icon="north_east"
                >
                  north_east
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* Kinetic Floating Icons */}
        <div className="hidden lg:block absolute bottom-20 left-1/4 opacity-10 rotate-12">
          <span
            className="material-symbols-outlined text-4xl"
            data-icon="route"
          >
            route
          </span>
        </div>
        <div className="hidden lg:block absolute top-1/3 right-1/4 opacity-10 -rotate-45">
          <span
            className="material-symbols-outlined text-4xl"
            data-icon="location_searching"
          >
            location_searching
          </span>
        </div>
      </main>
    </>
  );
}
