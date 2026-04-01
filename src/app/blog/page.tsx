import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header></Header>
      <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section / Title */}
        <section className="mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase font-label mb-2 block">
            Calea Cinetică
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface leading-none mb-6">
            JURNAL ȘI <br />
            PERSPECTIVE
          </h2>
          <div className="w-24 h-1 kinetic-gradient" />
        </section>
        {/* Featured Post - Asymmetric Layout */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
          <div className="md:col-span-8 relative z-10">
            <div className="aspect-video-[16/9] overflow-hidden rounded-xl shadow-xl">
              <Image
                width={1000}
                height={1000}
                alt="Articol Recomandat"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                data-alt="Close-up of a high-tech orienteering compass and map held by an athlete in a misty pine forest environment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8tSIopTWCNdHUXNHPq-mil4J1B42fULdcpUq33kx8-FD9UpUHioqI2DZYsQr_Zurnouz61wGpQPip03WAKdy0RhWw6AIl1zwTQQrIHfVedpwPsNaHHMVPkKaBxwiug8gTSITRqQMatkJ1w4P0gUgNQR7EGA36pxanKavta3F5LTyYczUi8h8X82g6yVOCFcGojCGHKVVaetdtBB9D9tMlo-fdZeEpK27Cas9IkKZlo6waw8rMGOoncamVhGOkDxMFFxpfMwTQ-tY"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:-ml-20 mt-6 md:mt-0 bg-surface-container-lowest p-8 md:p-12 shadow-2xl relative z-20 border-l-4 border-primary">
            <span className="text-[10px] font-black tracking-widest text-outline-variant uppercase mb-4 block">
              Articol Recomandat • 12 Oct 2023
            </span>
            <h3 className="text-2xl md:text-3xl font-headline font-extrabold tracking-tight mb-4 leading-tight">
              Stăpânirea Terenului: Pregătirea Mentală pentru Navigație de Elită
            </h3>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              Descoperă cadrele psihologice utilizate de sportivii de top din
              orientare pentru a-și menține claritatea sub stres fizic ridicat.
            </p>
            <a
              className="inline-flex items-center text-primary font-bold text-sm tracking-widest group"
              href="#"
            >
              CITEȘTE TOT ARTICOLUL
              <span
                className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2"
                data-icon="trending_flat"
              >
                trending_flat
              </span>
            </a>
          </div>
        </section>
        {/* Post Grid - Intentional Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Post 1 */}
          <article className="flex flex-col group">
            <div className="aspect-square mb-6 overflow-hidden relative">
              <Image
                width={1000}
                height={1000}
                alt="Articol Recomandat"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Top view of lightweight professional trail running shoes on a rugged rocky path with blue sky reflections"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD894nNDzPPmMyGB1PtVFuVX2_pFcgolGSGCHmA0SZRjVOUXfATZPb5-BhcdOZ5BTvBAUyT-TkvCDoF2VD4pPH8zPPp2HpOHo_qpjBpNFEDbvv-idjmyXcNfhj6UwXiMPPahYwt2lQKlSz6Ulgr-1xb0Q17f07lgKN2LbSslJQPEyxc8IfqjlOLS51mg4OOkfFOSjh8EMH5IaiGh9qZncUTT7NUazLhD_zCbIsTnfflR4XX_hOyr4I1RKkDZNkiXnSZzgabjV6BP3s"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Echipament
              </div>
            </div>
            <div className="px-2">
              <time className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-2">
                28 Septembrie 2023
              </time>
              <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                Echipament Ultraușor pentru Sezonul de Iarnă
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2">
                Explorarea celor mai recente țesături respirabile și
                impermeabile care nu îți vor încetini sprintul în lunile reci.
              </p>
            </div>
          </article>
          {/* Post 2 (Shifted down for asymmetry on desktop) */}
          <article className="flex flex-col group lg:mt-12">
            <div className="aspect-square mb-6 overflow-hidden relative">
              <Image
                width={1000}
                height={1000}
                alt="Articol Recomandat"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Low angle shot of an athlete sprinting through a forest clearing with sunbeams filtering through the autumn leaves"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW82BbUhM4zzkpPAiq-qmRQE5GBcN2TAfbob3WqCZEiPk-jVyBchmlZXfN-om46gMhVL_J1M8TPKqCmu_1F_G2KKrc_FQT5t_19rW8DiEAs16YdL75Ju6kUqhZ03zdODVG2ie8bzUOyBcZOwb1oo1dhfUYx5-zgAeBbEty58aKzvbqcAuM1vGBokmj5uFA1YUof2DY4Q_VUEDhamr3Fo0PvGyDIfjMJuSfH348FkEo8tV9JWnfb_bSS-XtjUcEpSeDWagprISrGoU"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Antrenament
              </div>
            </div>
            <div className="px-2">
              <time className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-2">
                15 Septembrie 2023
              </time>
              <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                Antrenament pe Intervale în Topografii Diverse
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2">
                Cum să îți adaptezi antrenamentele VO2 max atunci când treci de
                la poteci forestiere plane la schimbări abrupte de elevație.
              </p>
            </div>
          </article>
          {/* Post 3 */}
          <article className="flex flex-col group">
            <div className="aspect-square mb-6 overflow-hidden relative">
              <Image
                width={1000}
                height={1000}
                alt="Articol Recomandat"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Atmospheric landscape of a valley at dawn with deep blue mountain silhouettes and rising morning mist"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr34ruY7QZLSXktL1VTkfVAkUakdM1plM2XxZ6JguLfIX5cuXmcWeGxkWUN7Ni2pPR-kfoCavBDBGfp41czOyLl_gGFpueAfz2IUX9jsrm_7pHbClPF7Q7g1sSwARX9OeoLjXn4zA8KHim8JnCItNMnl9vNR_JDlNtclC_tCTVb8UBmsmBGV8B3cpBqVRSEF9s-oU6qAAOGZMGv9F26NnuoFSGh6GqtHV33qQD9jswYX9IzoXZcmA7Au-1lm9WUq3fV3vBk_hKMEE"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Locații
              </div>
            </div>
            <div className="px-2">
              <time className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-2">
                30 August 2023
              </time>
              <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                Văi Ascunse: Cele mai bune hărți din România
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2">
                O listă curată cu hărțile noastre preferate, provocatoare din
                punct de vedere tehnic, situate în dealurile Carpaților.
              </p>
            </div>
          </article>
          {/* Post 4 */}
          <article className="flex flex-col group">
            <div className="aspect-square mb-6 overflow-hidden relative">
              <Image
                width={1000}
                height={1000}
                alt="Articol Recomandat"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Digital stopwatch displaying a fast lap time with blurred athletic track and white lines in the background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOM0Day73o0gviDcDBc9SNCwnhoIJWVqbXsY4Ph8NGv3PMuRtz4CwxHP7b0h6OgyVNxkP54ZRfzzX0EYx62QX6wD4dA0yR8bYVAWKTEjld4B2E6sj-pvadJIRicLq1oR9fbemGFTI-yaO9yi2iNqNURf9yM6ZxHbjW3PG0CBHqrMKyajrqVOa_aVJvh4OtPDUGbojdgZtDM9zPtW9AHYVJVZyaVLKtp6emPV_DiUv_7PHPfFpffGxLedSHnCHHDhS3WoTnxDr160A"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Analiză
              </div>
            </div>
            <div className="px-2">
              <time className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-2">
                12 August 2023
              </time>
              <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                Date Post-Cursă: Decodificarea GPS-ului
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2">
                Învață să îți citești hărțile de căldură și graficele de viteză
                pentru a identifica exact unde ai pierdut secunde prețioase.
              </p>
            </div>
          </article>
          {/* Post 5 (Shifted down) */}
          <article className="flex flex-col group lg:mt-12">
            <div className="aspect-square mb-6 overflow-hidden relative">
              <Image
                width={1000}
                height={1000}
                alt="Articol Recomandat"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="High-contrast black and white shot of an athlete's hands carefully folding a large topographic map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_tGUArlEtyfI44lym0wRMIA-jbxasMG9G8bAJkxfNfRnSk3OZoDgIJFefdTmFk8Swbhtnk7FvtHion83grg3w7us3x3Q_NZENJnZKImZz7nPMgOuhGdw6tESqa5M73vJhd0DqAzx2EiTbT9D0aVu4QNWiVIa8wJb7Y3-6R-MhCxYNKGlIfiDhKUprIVbvOX9IGGmH_StofgI3wJacDt4MHcPTAJEMkI4Jymd0w83xycn7XiRXGJ18BSmD6OFL4C8_baQVSWFDMKk"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Abilități
              </div>
            </div>
            <div className="px-2">
              <time className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-2">
                05 August 2023
              </time>
              <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                Arta Simplificării
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2">
                Cum să ignori 90% din detaliile hărții și să te concentrezi doar
                pe „punctele de atac” critice în timpul unui sprint.
              </p>
            </div>
          </article>
          {/* Newsletter Inset Card */}
          <div className="bg-primary p-12 flex flex-col justify-center items-start text-on-primary rounded-xl kinetic-gradient shadow-2xl lg:-mt-12">
            <h4 className="text-3xl font-headline font-black mb-4 leading-tight uppercase tracking-tighter">
              Rămâi pe drumul cel bun.
            </h4>
            <p className="text-on-primary/80 mb-8 text-sm leading-relaxed">
              Alătură-te celor peste 500 de sportivi de elită care primesc
              săptămânal perspective tactice și alerte de evenimente.
            </p>
            <div className="w-full space-y-4">
              <input
                className="w-full bg-white/10 border-white/20 text-white placeholder-white/40 font-label tracking-widest py-4 px-6 rounded-none text-xs focus:ring-white/40"
                placeholder="EMAIL-UL TĂU"
                type="email"
              />
              <button className="w-full bg-white text-primary font-headline font-black py-4 uppercase tracking-widest hover:bg-surface transition-colors active:translate-y-1">
                ABONEAZĂ-TE
              </button>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-24 flex items-center justify-between border-t border-outline-variant/20 pt-10">
          <button className="flex items-center gap-2 text-outline-variant hover:text-primary transition-colors font-label font-bold tracking-widest text-xs">
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>{" "}
            ANTERIOR
          </button>
          <div className="flex gap-4">
            <span className="text-primary font-bold border-b-2 border-primary">
              01
            </span>
            <span className="text-outline-variant hover:text-on-surface cursor-pointer">
              02
            </span>
            <span className="text-outline-variant hover:text-on-surface cursor-pointer">
              03
            </span>
          </div>
          <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-label font-bold tracking-widest text-xs">
            URMĂTOR{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
