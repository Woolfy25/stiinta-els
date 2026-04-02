import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Image from "next/image";

export default function Evenimente() {
  return (
    <>
      <Header></Header>
      <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="px-6 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-20 opacity-5 pointer-events-none">
            <span className="text-[12rem] font-black font-headline uppercase leading-none">
              Evenimente
            </span>
          </div>
          <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-4 max-w-2xl">
            Calendarul <span className="text-primary italic">Kinetic</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-md">
            Precizie. Viteză. Strategie. Găsește următoarea provocare de
            orientare în terenul sălbatic al României.
          </p>
        </header>
        {/* Events Filter & Bento Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-label text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">
              Viitoare
            </button>
            <button className="bg-surface-container-low text-secondary px-6 py-2 rounded-full font-label text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">
              Liga Națională
            </button>
            <button className="bg-surface-container-low text-secondary px-6 py-2 rounded-full font-label text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">
              Antrenament
            </button>
            <button className="bg-surface-container-low text-secondary px-6 py-2 rounded-full font-label text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">
              Arhivă
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Event Card 1: Main Highlight */}
            <div className="md:col-span-8 group bg-surface-container-lowest overflow-hidden flex flex-col md:flex-row shadow-[0px_4px_24px_rgba(0,0,0,0.04)]">
              <div className="md:w-1/2 aspect-[4/3] md:aspect-auto relative overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  alt="Orienteering athlete running"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-alt="athlete in specialized orienteering gear navigating through a dense forest with a map and compass in hand, sunlight filtering through trees"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpL0JYoSFHWLT_7o2jG-Lj2bi1K9aDk8K52CMFDreQsRVEy70HBNmjqtgd74DOCF9TpTPWfBx4lxcmtDL1Pn021V6c-q53hbNrUAzVwhpyEBDdRFZKbaHtAYtIbTEFOTFROkCFVmGd4nG8VAEh51hFVFHuWA1GiUOQ20FDRjzeDhpVZXmcHPB1N2Des-EdlE1WdIorD2MJmLdmYAl9paI7Jc370vg903RPb3ab1Wr_axGMqk3AcjvlwmW5Z3RFf5eJXyD95i9K5Qw"
                />
                <div className="absolute top-4 left-4 kinetic-gradient text-white px-4 py-1 font-label text-[10px] font-black uppercase tracking-widest">
                  Campionat
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      data-icon="calendar_today"
                    >
                      calendar_today
                    </span>
                    <span className="font-label text-[10px] font-bold text-primary uppercase tracking-widest">
                      12-14 Octombrie, 2024
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-3xl tracking-tight mb-3">
                    Trofeul Transilvaniei: Sprint de Toamnă
                  </h3>
                  <div className="flex items-center gap-1 text-on-surface-variant mb-6">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <span
                      className="text-sm font-medium"
                      data-location="Baia Mare, Romania"
                    >
                      Baia Mare, Maramureș
                    </span>
                  </div>
                </div>
                <button className="w-full kinetic-gradient text-on-primary py-4 font-label font-black text-xs tracking-[0.2em] uppercase rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  ÎNSCRIE-TE
                </button>
              </div>
            </div>
            {/* Event Card 2: Small */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border-t-4 border-primary">
              <div>
                <div className="font-label text-[10px] font-bold text-outline uppercase tracking-widest mb-6">
                  Eveniment Local
                </div>
                <h3 className="font-headline font-bold text-2xl tracking-tight mb-4 leading-tight">
                  City Maze: Seria de Navigație Nocturnă
                </h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  Experimentează emoția orientării urbane sub lumina lunii.
                  Precizia este esențială pe străduțele înguste din Centrul
                  Vechi.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="event"
                    >
                      event
                    </span>
                    <span className="font-bold">28 Octombrie, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="near_me"
                    >
                      near_me
                    </span>
                    <span
                      className="font-medium"
                      data-location="Cluj-Napoca, Romania"
                    >
                      Cluj-Napoca, România
                    </span>
                  </div>
                </div>
              </div>
              <button className="mt-8 text-primary font-label font-black text-xs tracking-widest uppercase border-b-2 border-primary/20 hover:border-primary transition-all pb-1 self-start">
                PARTICIPĂ
              </button>
            </div>
            {/* Event Card 3: Wide */}
            <div className="md:col-span-12 bg-inverse-surface text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="bg-primary text-white px-3 py-1 font-label text-[9px] font-black uppercase tracking-widest mb-4 inline-block">
                  Cantoment Elite
                </span>
                <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6 leading-none">
                  Cantoment de Strategie <br />
                  de Iarnă
                </h2>
                <p className="text-zinc-400 max-w-xl mb-8">
                  Un program tehnic intensiv de 5 zile pentru sportivii de
                  performanță. Stăpânește citirea complexă a curbelor de nivel
                  și controlul fin al direcției în zăpadă.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                      Date
                    </div>
                    <div className="font-headline font-bold text-xl">
                      02-07 Dec
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                      Locație
                    </div>
                    <div
                      className="font-headline font-bold text-xl"
                      data-location="Păltiniș, Sibiu"
                    >
                      Păltiniș, Sibiu
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                      Taxă
                    </div>
                    <div className="font-headline font-bold text-xl">
                      250 EUR
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <button className="bg-white text-black px-10 py-5 font-label font-black text-sm tracking-[0.2em] uppercase rounded-md hover:bg-primary hover:text-white transition-colors">
                  REZERVĂ LOC
                </button>
              </div>
            </div>
            {/* Event Card 4: Medium */}
            <div className="md:col-span-6 bg-surface-container-lowest shadow-[0px_4px_24px_rgba(0,0,0,0.04)] group">
              <div className="h-64 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  alt="Mountain peak with fog"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="dramatic mountain landscape with low hanging clouds and rocky peaks in the early morning light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRjSnS0z9hlJ_uUfemoKCdSxL_mSmOiwnHnv4mNzZQfWpYGB-UY8XWCWvyySMd4hK9YchYK_QUxm5RVHF2NdGoTF0WCNNtq4iqh7saVl48-lAUUd_Jg3f1ixAN5AGBWNf9md_BugUFaBaPsZCPsJYWGcc-A0BzCVLNyzu_X186XlhnaJroGYCYdPhuX2gefzlDvwS6DAGZ4fDr2qbjfm0k6I_-7ukxMEm308rTtvfNcpjt0CdLKjNRK9H6akAvMsdTh9P1q0_k9A"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label text-[10px] font-bold text-primary uppercase tracking-widest">
                    Seria Națională
                  </span>
                  <div className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold">
                    Punctaj WRE
                  </div>
                </div>
                <h3 className="font-headline font-bold text-2xl tracking-tight mb-4">
                  Scutul Carpatin
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Navigație forestieră pe distanță lungă în păduri bătrâne de
                  fag. Cerințe fizice ridicate și complexitate tehnică mare.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      data-icon="schedule"
                    >
                      schedule
                    </span>
                    <span className="text-xs font-bold uppercase tracking-tight">
                      15 Noi, 09:00 AM
                    </span>
                  </div>
                  <button className="kinetic-gradient text-white px-6 py-2 rounded-md font-label text-[10px] font-black uppercase tracking-widest">
                    Înscrie-te
                  </button>
                </div>
              </div>
            </div>
            {/* Event Card 5: Medium */}
            <div className="md:col-span-6 bg-surface-container-lowest shadow-[0px_4px_24px_rgba(0,0,0,0.04)] group">
              <div className="h-64 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  alt="Old map and compass"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="topographic map spread across a table with a classic orienteering compass and a pencil, moody indoor lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPtdZtBziJqz6wHDX3PJsOfcwEIwE67rxJLGNwxItqXwaYQLkVpeiBaDgesnWXGqBd4RXUhjmCL7LxCZFVG1FkTxoAk3qIu71982lUslKftGDmkiNSOC6uxigGo5EOt7jFaamZ0norNh4xToK67k7zSDKlCPfIo4IPuAWxSf-K_KOhdFkeBkjoDWV9KjVnyCHPhEk0jorgBBASe3WrDoHbXN3pAeZgGdITTaQAJwu1hIXjSVJcXhY83cA8M-BgDxpNE0OZNYv-dKo"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label text-[10px] font-bold text-primary uppercase tracking-widest">
                    Workshop
                  </span>
                  <div className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold">
                    Intrare Liberă
                  </div>
                </div>
                <h3 className="font-headline font-bold text-2xl tracking-tight mb-4">
                  Introducere în Orientare
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Ghid pentru începători despre simbolurile hărții, orientarea
                  spre nord și alegerea de bază a traseului. Deschis tuturor
                  vârstelor.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      data-icon="schedule"
                    >
                      schedule
                    </span>
                    <span className="text-xs font-bold uppercase tracking-tight">
                      05 Oct, 10:00 AM
                    </span>
                  </div>
                  <button className="kinetic-gradient text-white px-6 py-2 rounded-md font-label text-[10px] font-black uppercase tracking-widest">
                    Înscrie-te
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
