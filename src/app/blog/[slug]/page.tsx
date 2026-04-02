import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import Image from "next/image";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header></Header>
      <main className="pt-24 pb-20">
        {/* Content Focus Header */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <button className="flex items-center gap-2 text-primary font-bold hover:translate-x-[-4px] transition-transform duration-300">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-headline uppercase text-sm tracking-widest">
              Înapoi la Blog
            </span>
          </button>
        </div>
        {/* Hero Section: Intentional Asymmetry */}
        <article className="relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Title & Meta */}
            <div className="lg:col-span-10 lg:col-start-2 mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] rounded-sm">
                  Tehnică
                </span>
                <span className="text-outline text-xs font-bold uppercase tracking-widest font-label">
                  14 Octombrie 2023
                </span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-on-background mb-8">
                Secretele Navigației Tactice în{" "}
                <span className="text-primary italic">Teren Accidentat</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full h-full object-cover"
                    data-alt="close-up portrait of a professional male orienteering coach with a focused expression"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdNYNy0AzjDynCf-PmPZ37l29FyJt3V1z7TIZKAwo1kutM2sYucwVyDKOkN-ilrMWXTqxx8E7L8n18GrV6RwshrE2duLSgq7QbvHUOXFu3lpPJ0X9J1aHfmW98ZYnFqP5pMTqYJwu6mXKZDjiegDExfUUC8FNTCE0R8LACqY4vBD1kuIFGaVBInzrh27EDx6sdaFGEpOP3CrB9kcjtp4byZQT8U_4NS23ngjiFsv-OWgHtngpmDP60W7r8f6igMseDjEhjx4qStjw"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">Andrei Ionescu</p>
                  <p className="text-outline text-xs">
                    Antrenor Senior, S.E.S.
                  </p>
                </div>
              </div>
            </div>
            {/* Hero Image with Overlap */}
            <div className="lg:col-span-12 relative h-[500px] md:h-[700px] mb-20">
              <div className="absolute inset-0 bg-primary/10 -rotate-1 translate-x-4 translate-y-4" />
              <Image
                width={1000}
                height={1000}
                alt=""
                className="absolute inset-0 w-full h-full object-cover kinetic-shadow z-10"
                data-alt="orienteer athlete in technical gear running through a dense foggy forest with high contrast light and deep shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZWpHF9qgY2BGJvEjNkB8VQNgjhdRuFfTG5kMAzTQrgmXrhJCorpEYikrSVEox8xT5dFaDl5t7MPoNGSVgWBvCYFPaxohnjjcUGpcIue1eiEtIH8wtObA9ZQs9vu3MOiQzEq3i159IjrEjjNhOaCETm2_tG8z7I9oNlbass3XFdr1jTjKKm3ogStz1UmN-uZIpPb4UPrd5toCSR5H9dh5XlLUdxnoG1QHfdZ2gde5I4jciaPFuWp45pEZX5MHFGv0oA46JL0TRebU"
              />
            </div>
            {/* Article Content: 2/3 and 1/3 Split */}
            <div className="lg:col-span-7 lg:col-start-2 space-y-8">
              <p className="font-body text-xl leading-relaxed text-on-background font-medium italic border-l-4 border-primary pl-8 py-2">
                Navigația în orienteering nu este doar despre citirea hărții;
                este un dans constant între viteza fizică și precizia mentală.
                Când terenul devine ostil, strategia este singura care face
                diferența între podium și rătăcire.
              </p>
              <p className="font-body text-lg leading-loose text-on-surface">
                Orienteering-ul modern cere mai mult decât o condiție fizică de
                invidiat. În inima Munților Carpați, unde relieful se schimbă la
                fiecare pas, `&quot`tactica`&quot` devine cuvântul de ordine.
                Primul secret al unui navigator de elită este capacitatea de a
                vizualiza formele de relief în 3D înainte de a le întâlni în
                teren.
              </p>
              <h2 className="font-headline text-3xl font-bold mt-12 mb-6">
                1. Simplificarea Reliefului
              </h2>
              <p className="font-body text-lg leading-loose text-on-surface">
                O greșeală comună a începătorilor este încercarea de a citi
                fiecare mic detaliu de pe hartă. În zonele cu vegetație densă
                sau relief micro, cheia succesului stă în{" "}
                <strong>Generalizare</strong>. Alege puncte de reper mari – o
                vale adâncă, o creastă proeminentă sau o margine de pădure
                clară.
              </p>
              {/* Bento-style Image Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
                <div className="col-span-2 row-span-2 h-[400px]">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full h-full object-cover kinetic-shadow"
                    data-alt="close up of an orienteering compass and a detailed topographical map resting on a mossy rock in the woods"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzaFOUm_ND8y3YdeptOpyYnxHH0LBsPwqgL1-xJoZWX2wJJ-TtaVIULjWid1TrTpn8XV6RnM3gDf564-7q5BTEx4UB-viLcr1QBfyTgQnDlxng25AxoYzwJwYxrCQzBsWKwrY-l_4aonBEdALqUPHhhTONTYj2xvPX5XKXcLE2Qp3brlf5lmqoSPsuGUMSeOuQCKn8a0wIH6bvcRyd6kvYkOPFKuFhUPiIuH3abH7qjNYZ8x_fSYAEwvSzrTBNkSN9HpOgwbjrxXQ"
                  />
                </div>
                <div className="h-[192px]">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full h-full object-cover kinetic-shadow"
                    data-alt="low angle shot of athletic shoes running over dry leaves and rugged terrain in a forest"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv1Hldzv03gpkhn2GW4NyiYLflpe5DoOte9RCwe_9UoME_5cKw80hepUlR0n8cv1XpRcVXmD04yShyCJSY3882jGokD6xobwdXCQzNGjbuAUP9b2id8fDeImVAmGIeCRt3niFkF34R5pjyf6lzaX4yiOVriliEfwCrayrcWjKe5f45Z3RFDnJdmSqDtPBh1iPgxRgiiTVrrDnNm-yZmJByLNqK_mIXxGOorWwe78icetfKrIPGLxQcxrktnc92QITHvSBtZPgtlm4"
                  />
                </div>
                <div className="h-[192px]">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full h-full object-cover kinetic-shadow"
                    data-alt="vibrant orange and white orienteering flag control point hanging on a tree in sunlight"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCB5U6gUzQ912v-BEa79LwSAK4HnSJOonTSNqAcpeODrLYGIZocj4JDoIve3SWqUlZaoRPTtaPZu_yC1_JRG_PcFr6uXT3y5h8oaclq6Q9qgfeyCGQOtcLoS27Y8jsy_YrRSd0858t43gtGwrJXGJ1zl0BlE0M73zx3rCZsecvutCesuAlAl1Ur6G9Rkj4Mnwg0H7nXvyu_MTX5EKGIZcKl-a7_nPQDWP6gbldAqBk9Zu4H6aR8oVasGI98JRxnUWctzQJr5bQGKI"
                  />
                </div>
                <div className="col-span-2 h-[192px]">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full h-full object-cover kinetic-shadow"
                    data-alt="wide shot of sunlight filtering through tall trees in a vibrant green forest"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY5JuhhvFyZ6v4x5SRPx8DU0Gs13RSVsNcm4qcWucqwePuE0iV5zt-DQLzWic4oFxSRddAPNRuNXS9q5bcYa3Qmacl7YzlJmXs-hHtdduv-RE-Dh0EXPj_akaE10Z75bxBSRLTD4PPTELemMPO7L5h30fbx_3yl2Ws3rbrLHU2J1qeSly8OnBVgwKeCfdEWsfNJSc0FTF1vuumCNso8zP5POQhaBvzV14CyhzM--ofcwkB18m7DQ4guHpJ4bcImSX95xXjAqnXNtQ"
                  />
                </div>
              </div>
              <h2 className="font-headline text-3xl font-bold mt-12 mb-6">
                2. Menținerea Direcției pe Busolă
              </h2>
              <p className="font-body text-lg leading-loose text-on-surface">
                În teren accidentat, panta te va împinge involuntar spre vale
                sau spre coama dealului. Verificarea constantă a busolei (la
                fiecare 5-10 secunde) este vitală pentru a corecta deriva
                cauzată de oboseală sau de obstacolele naturale.
              </p>
              {/* Video Placeholder Card */}
              <div className="relative group cursor-pointer my-16 rounded-xl overflow-hidden bg-zinc-900 aspect-video flex items-center justify-center">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  data-alt="cinematic view of a sunset over rolling forest hills with mist in the valleys"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6JtFlqA5DMfq_jvtz8G7t06dXvlQHWpb23Qo6BzUybYaLIxSPk3PLBpO3nyo6vC5H-bqQ-gmFVtIwI8MmcH-xeXWhI5D_NFiCNpCUYpRcpkgO3kwdSY0NMPMyD8LhiZwbjEsAC6T38_L6X0hLWHoLjjUVG1GPl4r64tFKOt4RXetCBdTz54Ind_-5pznSv2wD8rVnyT1DiKLU6LTJ0R6oJ6BLFPDbmKJtck498O7zbHq0OD4cnJz5mjYB_XqQ7pVGMAZ4DvQMr6M"
                />
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      play_arrow
                    </span>
                  </div>
                  <span className="font-headline text-white uppercase tracking-widest text-sm font-bold">
                    Urmărește Analiza Video
                  </span>
                </div>
              </div>
              <p className="font-body text-lg leading-loose text-on-surface">
                Concluzionând, succesul în navigația tactică vine din încrederea
                în propriile instrumente și din capacitatea de a rămâne calm
                atunci când mediul înconjurător pare să te copleșească. S.E.S.
                Orienteering continuă să promoveze aceste standarde de excelență
                prin fiecare eveniment organizat.
              </p>
            </div>
            {/* Sidebar: Sticky Stats & Related */}
            <aside className="lg:col-span-3 lg:col-start-10 space-y-12">
              <div className="p-8 bg-surface-container-low rounded-xl kinetic-shadow">
                <h3 className="font-headline font-extrabold text-sm uppercase tracking-widest mb-6 text-primary">
                  Detalii Articol
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">
                      Timp Citire
                    </p>
                    <p className="font-headline font-bold">6 Minute</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">
                      Dificultate
                    </p>
                    <p className="font-headline font-bold">Avansat</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">
                      Subiect
                    </p>
                    <p className="font-headline font-bold">Tactici Montane</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-headline font-extrabold text-sm uppercase tracking-widest text-on-background">
                  Articole Similare
                </h3>
                <a className="block group" href="#">
                  <div className="aspect-video mb-3 overflow-hidden">
                    <Image
                      width={1000}
                      height={1000}
                      alt=""
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-alt="hiker with backpack looking at map in the mountains"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs4t4acb2xT6dqVVUPM9Ki1tTA9IzRdm8mD7J_jMn58v_QS1efRQnt6KutrMeHl2V85dWNMyf5tOmpl8ztwckkDHcPaO8Yf2Gdw92c-5d5SBqgs3GXuReqwAzsLu5xLPumGWFyUDXxszwZqUpwZJJHmxWDAsJ6ZC34Zwd0yTl7sNISxDsLevIKibPOeSu0JqiaaSzNl7eC0I4QsteSVLPiJKoABYbzDYeuctbyWtzUjVlw8UF0jUsFZM8FvqDm7T09bMsV-_b5kWc"
                    />
                  </div>
                  <h4 className="font-headline font-bold text-sm group-hover:text-primary transition-colors">
                    Echipamentul Esențial pentru 2024
                  </h4>
                </a>
                <a className="block group" href="#">
                  <div className="aspect-video mb-3 overflow-hidden">
                    <Image
                      width={1000}
                      height={1000}
                      alt=""
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-alt="athletes running on a track under stadium lights"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsNMQm-ET6aePNYVQQaBmTwutJmy1It-ixYlyckydye1laiNbNVYIupEKyxuEQw24y9koXnpH85HZK6r-N1_xCnepgJT4cr18PG6iDhONsTZtgwj7z_NGU1M4FhXiXk1ZKMVzV59-08K3Wad0D-dWoBwrv0YR77TAnhs3kxkGfhA4L6JbVqeCTu9_2VKBb2tDVIt1sUx8UYVlUe5AexNMaqhG289z5AUWxYZiQVoOK4JWVVxhHDMtiLEM7UYJvYtW5oXiFIeyXp6c"
                    />
                  </div>
                  <h4 className="font-headline font-bold text-sm group-hover:text-primary transition-colors">
                    Pregătirea Fizică de Iarnă
                  </h4>
                </a>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer></Footer>
    </>
  );
}
