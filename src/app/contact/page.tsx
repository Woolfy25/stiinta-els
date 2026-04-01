import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header></Header>
      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8">
            <div className="w-full md:w-2/3">
              <span className="font-label text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
                Harta ta începe aici
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface leading-none -ml-1 kinetic-text">
                Contactează-ne
              </h2>
              <p className="mt-6 text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
                Suntem aici să te ajutăm să-ți găsești drumul pe orice hartă.
                Întreabă-ne despre cursuri, echipament sau următoarele
                competiții.
              </p>
            </div>
            <div className="hidden md:block w-1/3 opacity-10 select-none">
              <span className="font-headline text-[12rem] font-black leading-none uppercase pointer-events-none">
                O-MAP
              </span>
            </div>
          </div>
        </section>
        {/* Main Content: Bento Layout */}
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span
                className="material-symbols-outlined text-[8rem]"
                data-icon="explore"
              >
                explore
              </span>
            </div>
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    className="font-label text-[10px] uppercase tracking-widest text-outline"
                    htmlFor="name"
                  >
                    Nume Complet
                  </label>
                  <input
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface"
                    id="name"
                    placeholder="Popescu Ion"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="font-label text-[10px] uppercase tracking-widest text-outline"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface"
                    id="email"
                    placeholder="ion@exemplu.ro"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="font-label text-[10px] uppercase tracking-widest text-outline"
                  htmlFor="subject"
                >
                  Subiect
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface"
                  id="subject"
                  placeholder="Înscriere club"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-label text-[10px] uppercase tracking-widest text-outline"
                  htmlFor="message"
                >
                  Mesaj
                </label>
                <textarea
                  className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface resize-none"
                  id="message"
                  placeholder="Cum te putem ajuta?"
                  rows={4}
                  defaultValue={""}
                />
              </div>
              <button
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-[0.75rem] font-bold uppercase tracking-widest px-10 py-4 rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                type="submit"
              >
                Trimite Mesaj
              </button>
            </form>
          </div>
          {/* Details Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="bg-surface-container-low p-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary-container/20 p-3 rounded-xl">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="mail"
                  >
                    mail
                  </span>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">
                    Scrie-ne
                  </span>
                  <p className="font-headline font-bold text-lg text-on-surface">
                    contact@stiintaelectrosistem.ro
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-container/20 p-3 rounded-xl">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="call"
                  >
                    call
                  </span>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">
                    Suna-ne
                  </span>
                  <p className="font-headline font-bold text-lg text-on-surface">
                    +40 700 000 000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-container/20 p-3 rounded-xl">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="location_on"
                  >
                    location_on
                  </span>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">
                    Vizitează-ne
                  </span>
                  <p className="font-headline font-bold text-lg text-on-surface">
                    Baia Mare, România
                  </p>
                  <p className="text-sm text-on-surface-variant font-light">
                    Clubul Sportiv Știința Electro Sistem
                  </p>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="h-64 bg-surface-container overflow-hidden relative group cursor-crosshair">
              <Image
                width={1000}
                height={1000}
                alt="Topographic Map Fragment"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700"
                data-alt="abstract architectural map lines of a city with topographic contours and orange orienteering markers on white paper"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqex8MHsMo-7q1CpQo_tv2FaF5LNXaQuGo5q0Rt1Og6fZYafMHCOCog-Qdf4D6rUZxJAZyh3uHry08M_AFjd2JG41qMDRz-1Q2PlReuDa5EyRgpmttSFwJlN9YZS6irO2QYh-7I25qriUP7K68nZ_hnXE4ZT3zp_XZKfdX7IanonRDhZs57VK0rgD3nfz2wa7RxYLN_GzlydHBT4tyQpZIm0Y0gp8H_WMDQcwdYDXf0kiZj8D_v5QIxeGULKYtVovtp4e2ZIzVthM"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-4 shadow-xl flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="pin_drop"
                  >
                    pin_drop
                  </span>
                  <span className="font-label font-bold text-[10px] uppercase tracking-widest">
                    Vezi pe Hartă
                  </span>
                </div>
              </div>
              {/* Decorative topographical lines effect */}
              <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10" />
            </div>
            {/* Socials */}
            <div className="flex items-center justify-between p-6 bg-inverse-surface text-white">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline-variant">
                Urmărește-ne
              </span>
              <div className="flex gap-6">
                <a
                  className="hover:text-primary-container transition-colors font-headline font-black italic"
                  href="#"
                >
                  FB
                </a>
                <a
                  className="hover:text-primary-container transition-colors font-headline font-black italic"
                  href="#"
                >
                  INSTA
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Bottom FAQ/Trust Section */}
        <section className="mt-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Image
              width={1000}
              height={1000}
              alt="Compass in Action"
              className="w-full h-80 object-cover shadow-2xl"
              data-alt="close up of a compass being held by a hand in the forest with soft green moss and dappled sunlight"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQSKgpOBA6Y3E24looKFf3LYNBrXOhZAbh0YY9XUvDiR1hykFKP5uZYyYJfD3_1JbCs9r5NUNIQqJm47nhNTwJpxT-hRmoN6dsujcbYM8uHq9aprFErYEvblQACrtEteAchIwd7_FE74pDvawwxReKSgBGG8q-cRmGdGgXmQivESKcAapluh_fTeZ1Fwx35IJdW2JDfEh-YZWxeuKLJxPHsHdTGFYmBOEYXdzc8zR2fdt0prcUu0ISBOWcBpDQfCW5IZ9gQ-NbVLk"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="font-headline text-3xl font-black uppercase italic tracking-tighter">
              Nu te poți rătăci.
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Indiferent de nivelul tău de experiență, echipa noastră tehnică și
              antrenorii sunt gata să îți ofere tot sprijinul necesar. Suntem
              cel mai activ club de orientare din regiune, pregătiți să te
              ghidăm prin păduri și pe podiumuri.
            </p>
            <div className="pt-4">
              <a
                className="text-primary font-bold font-label uppercase text-xs tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1 inline-flex items-center gap-2"
                href="#"
              >
                Întrebări frecvente{" "}
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
