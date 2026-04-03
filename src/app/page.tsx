"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { openModal } from "../store/slices/modalSlice";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Header></Header>
      <main className="pt-16">
        <section className="relative h-[751px] flex items-center overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 opacity-60">
            <Image
              alt="Atlet de orientare"
              className="w-full h-full object-cover"
              fill
              data-alt="dynamic low-angle shot of a trail runner navigating through a misty pine forest with a compass in hand, sunlight filtering through trees"
              src="/concurs-orientare.png"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="bg-primary text-on-primary px-3 py-1 font-label text-[0.7rem] font-bold tracking-[0.2rem] uppercase mb-6 inline-block">
                CALEA KINETICĂ
              </span>
              <h2 className="text-5xl md:text-8xl font-headline font-black text-white leading-none tracking-tighter uppercase mb-8">
                Precizie <br />
                <span className="text-primary-container">În Mișcare</span>
              </h2>
              <p className="text-lg text-zinc-300 font-body max-w-xl mb-10 leading-relaxed">
                Stăpânește terenul cu Știința Electro Sistem. Îmbinăm rezistența
                atletică cu navigația tactică pentru a redefini experiența de
                orientare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => dispatch(openModal())}
                  className="kinetic-gradient text-on-primary px-10 py-4 font-label text-[0.8rem] font-bold tracking-[0.1rem] rounded-md uppercase hover:scale-105 transition-transform"
                >
                  Începe Călătoria
                </button>
                <Link
                  href="/evenimente"
                  className="border border-white/20 backdrop-blur-md text-white px-10 py-4 font-label text-[0.8rem] font-bold tracking-[0.1rem] rounded-md uppercase hover:bg-white/10 transition-colors"
                >
                  Vezi Evenimente
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative Watermark */}
          <div className="absolute -bottom-10 -right-10 opacity-10 select-none">
            <span className="text-[15rem] font-black text-white font-headline leading-none">
              SES
            </span>
          </div>
        </section>
        {/* About Section */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden relative z-10 shadow-xl">
                  <Image
                    alt="Hartă orientare"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    fill
                    data-alt="top-down artistic close-up of a detailed topographic orienteering map with colorful course markings and a classic compass"
                    src="/harta-compas.png"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 kinetic-gradient opacity-20 blur-3xl rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-lg -z-0" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-8 uppercase">
                  Cine suntem
                </h3>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>
                    Fondată pe principiile preciziei electrice și vigoarei
                    atletice, Știința Electro Sistem este mai mult decât un club
                    sportiv — este o comunitate de înaltă performanță.
                  </p>
                  <p>
                    Suntem specializați în orientarea în pădure și urbană,
                    concentrându-ne pe stăpânirea tehnică a navigației. Membrii
                    noștri variază de la entuziaști de weekend la campioni
                    naționali, toți uniți de fiorul descoperirii.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/15 pt-8">
                  <div>
                    <span className="block text-4xl font-headline font-black text-primary mb-1">
                      20+
                    </span>
                    <span className="text-sm font-label uppercase tracking-widest font-bold">
                      Ani de Experiență
                    </span>
                  </div>
                  <div>
                    <span className="block text-4xl font-headline font-black text-primary mb-1">
                      500+
                    </span>
                    <span className="text-sm font-label uppercase tracking-widest font-bold">
                      Membri Activi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Events & Blog Bento Grid */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-primary font-label text-[0.7rem] font-bold tracking-[0.2rem] uppercase mb-4 block">
                  ULTIMELE NOUTĂȚI
                </span>
                <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter uppercase leading-none">
                  Știri și Teren
                </h3>
              </div>
              <a
                className="hidden md:block text-primary font-label font-bold tracking-widest border-b-2 border-primary-fixed pb-1 hover:opacity-70"
                href="#"
              >
                VEZI TOT
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
              {/* Large Featured Event */}
              <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest overflow-hidden group relative">
                <Image
                  alt="Eveniment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                  data-alt="athlete running through a sun-dappled beech forest during an orienteering competition, vibrant orange and white control marker in foreground"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzdF4SRqzzWT3Tygv-ZUUarcwxjJZ6JwoF5waMMrAZW92Bdrraeo2U0L0oK1Ve3RJADyYoVtyhKcC9kZ84oTfWlAvdQPdlH_ZQ9jONRA8K7GlSKLO7escuY0QfJz9vHjdk1Y8OqMbC8JETz81IkJfVBX2H52exigejOyKvv5jw5D3qoNjzjWq964a7xhPQqvUimrMgG9Y0TzI7nBeNW0c3STNKGls-yf7Z9a_hLOzwtT--aDVnpk9xpuL6mFT70wEkgYiEePS-tDE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="bg-primary text-white px-3 py-1 font-label text-[0.6rem] font-bold tracking-widest uppercase mb-4 w-fit">
                    EVENIMENT VIITOR
                  </span>
                  <h4 className="text-3xl font-headline font-black text-white uppercase mb-4">
                    Trofeul Toamna Carpatină 2024
                  </h4>
                  <p className="text-zinc-300 font-body mb-6 max-w-md">
                    Ultima provocare tehnică în inima munților Bucegi. 3 zile,
                    1500m diferență de nivel, adrenalină pură.
                  </p>
                  <button className="text-white flex items-center gap-2 font-label font-bold uppercase tracking-widest text-sm group">
                    Înscrie-te Acum
                    <span
                      className="material-symbols group-hover:translate-x-2 transition-transform"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              {/* Blog Post 1 */}
              <div className="md:col-span-2 bg-surface-container-lowest p-8 flex flex-col justify-between group">
                <div>
                  <span className="text-primary font-label text-[0.65rem] font-bold tracking-widest uppercase mb-4 block">
                    TEHNICĂ
                  </span>
                  <h4 className="text-2xl font-headline font-bold text-on-surface uppercase mb-4 group-hover:text-primary transition-colors">
                    Digital vs. Analog: Navigația în 2024
                  </h4>
                  <p className="text-on-surface-variant font-body">
                    Explorăm impactul urmăririi GPS asupra strategiei de
                    orientare de elită și protocoalelor de antrenament.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-zinc-400 font-label text-xs uppercase font-bold tracking-widest">
                    12 Oct, 2024
                  </span>
                  <span
                    className="material-symbols text-primary"
                    data-icon="north_east"
                  >
                    north_east
                  </span>
                </div>
              </div>
              {/* Small Event Card */}
              <div className="md:col-span-1 bg-surface-container-lowest group overflow-hidden relative">
                <Image
                  alt="Pădure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-20"
                  fill
                  data-alt="lush dark green forest canopy with rays of light piercing through dense leaves, atmospheric and moody"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFf4ntAQz5r4Wn8Y3pKsx-WZmbs0-LxoUyw3rVDPRozm0t-tEuHQlsuvXe6PgmEvLRamanJjkieZUjpuV8bVao5V1TOg6MG8a9Vg2Ox1O5rRV9dSFEhofBdTjK0VBOBiFXY5pt7uQBZcf4mWY8kO6_6P6s13OH7v_u9VTEgC7kAPkJZ1eCA-_VH4kmcSerUUCNoj_21YRkK61GUi3cV0D8jK1q6ixdnuG04lNTrRa-TDoqwoGD7IIaSIqJ8xEU4eXl_iHEi11PCLw"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h5 className="font-headline font-extrabold text-xl text-on-surface uppercase">
                    Seria Sprint de Noapte
                  </h5>
                  <span className="text-primary font-bold text-xs font-label mt-2">
                    PARCUL ORAȘULUI • 05 NOV
                  </span>
                </div>
              </div>
              {/* Blog Post 2 */}
              <div className="md:col-span-1 bg-primary text-on-primary p-6 flex flex-col justify-center text-center group cursor-pointer">
                <span
                  className="material-symbols text-4xl mb-4 group-hover:scale-110 transition-transform"
                  data-icon="forum"
                >
                  forum
                </span>
                <h5 className="font-headline font-bold text-lg uppercase leading-tight">
                  Vino la Workshop-ul Săptămânal de Strategie
                </h5>
                <p className="text-on-primary/70 text-sm mt-4">
                  Live pe Discord în fiecare marți la ora 19:00.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-5xl md:text-7xl font-headline font-black text-on-surface tracking-tighter uppercase mb-8">
                Ești gata să-ți{" "}
                <span className="text-primary">găsești drumul?</span>
              </h3>
              <p className="text-xl text-on-surface-variant mb-12 font-body max-w-2xl mx-auto">
                Fie că ești în căutarea unui antrenament de elită sau doar a
                unui nou mod de a explora natura, drumul începe aici.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => dispatch(openModal())}
                  className="kinetic-gradient text-on-primary px-12 py-5 font-label text-sm font-black tracking-[0.2rem] rounded-md uppercase shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                >
                  ÎNSCRIE-TE ÎN CLUB ACUM
                </button>
                <Link
                  href="/contact"
                  className="bg-surface-container text-on-surface px-12 py-5 font-label text-sm font-black tracking-[0.2rem] rounded-md uppercase hover:bg-surface-container-high transition-colors"
                >
                  CONTACTEAZĂ-NE
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 -rotate-12" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-primary/5 rotate-6" />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
