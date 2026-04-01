import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header></Header>
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="font-headline font-black text-4xl md:text-7xl tracking-tighter text-zinc-900 leading-none mb-4">
            GALERIA <br />
            <span className="text-sky-600">KINETICĂ</span>
          </h1>
          <p className="text-on-surface-variant max-w-md font-medium text-lg">
            Surprindem curajul, ritmul și precizia sportivilor noștri în natură.
          </p>
        </section>
        {/* Gallery Grid (Bento/Asymmetric Style) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Focus Image */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px] md:h-[600px]">
            <Image
              width={1000}
              height={1000}
              alt="Atleți în competiție"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="athlete holding a compass and map navigating through a dense forest with morning sunlight filtering through the trees"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyggXa4J_aaV2dhFGp7ym6cWK1r2NY6FzwcaUe4csIgu2HRk5qQcizjm-xYBVJBAdQHgb-DP70j_LGKSXI2nxXovP8XoXlntckOM9g5WRQFT1TBf4LebFWL9uELFE8Ok5STpXiJWT2UywDsYkUZK5vN8dnMLxwr4i-mOrgk4dp1drAY0cG_CQfoqB5PVU3ONa9pJNpqe_kC4qVqkZYy6TaaP8LnJCojTsYGqmmUNdAPyxEe1uQqUzlWdM_jHOh3lUTtvTHCbUfEvg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex flex-col justify-end p-8">
              <span className="text-sky-400 font-label font-bold text-xs tracking-[0.2em] mb-2">
                COMPETIȚII
              </span>
              <h3 className="font-headline font-bold text-2xl text-white">
                Trofeul Transilvaniei 2024
              </h3>
            </div>
          </div>
          {/* Vertical Secondary */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px] md:h-[600px]">
            <Image
              width={1000}
              height={1000}
              alt="Sesiune de antrenament pentru tineret"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="group of energetic children in team uniforms learning how to use orienteering maps in a bright grassy park"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJJ2u7Aay1zPWEC8xkfN5C8Mo7DeLRK3KkpnuzRfPFY1jYqAGs1A0RF4MtuLyQP84sY4MtvxJHRhpBjHfNfCdpujJHgSqVirhqSsODSkx7s_fG2x99hrq162nqzMeqcc0JoP2kZ0zs3wNI3yNoATfaGAG3x30K-0l1OM2pmEVu8ZIld5qfJtabWjLAIb3ShV_H_UjWpwiP8V12TewOSpkR3q-3uTd_DIkc77dlZujEO1lVSStQPUvOwuH5QwLUxU6E8H9arNwHss"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent flex flex-col justify-end p-8">
              <span className="text-sky-400 font-label font-bold text-xs tracking-[0.2em] mb-2">
                COPII
              </span>
              <h3 className="font-headline font-bold text-2xl text-white">
                Academia Viitorilor Navigatori
              </h3>
            </div>
          </div>
          {/* Triple Small Grid */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-[300px]">
            <Image
              width={1000}
              height={1000}
              alt="Cursă de noapte"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="dramatic night shot of an athlete with a headlamp running through foggy terrain at high speed with motion blur"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPiStYjOp7jPpTJFobnVhhdrsTEpudEW-_Un6YbagMlk-LPBF05D5ja2NmDAjlWO9gJ46InQH5LUtVczT7Qb877t_r5lylCaYNLaMQJ1iIcUr0gwAsLL3OndCoymgKrqUiSEnbsTRf6h4ODMuuxDRNpgqisD97CjrB6n7zW8RiALtvtm55qYeubYN5Oq_yjSpqtzFX-NzXjf3eMnWBqYijXiVxA-cl3tc13vKAF0eW_-z2D4yMI4iGt7iQCu25ESC6Nqp1EDdgjLw"
            />
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-[300px]">
            <Image
              width={1000}
              height={1000}
              alt="Sesiune de sprint"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="close-up of athletic shoes hitting the pavement during a high-intensity urban sprint competition with sharp shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD93w23e2NzYOzDPWmje0zd6Nb7LBZ1-5us2kKxxhCxIZcd-slmr89kPNgrPsys-lMdzqVeN-l6l7kIvaJFn5L8wRvWHblCs5ZiO-ZpFQRPjjyK7Nys20kjdP8To1AfzdMjDjvZyIlaEcF8qf7_LCJg9mIpA6fmcl37McSqnAVwJhnDhWfoBRdon8tqfo1HU1n61Q-9Qh0MNuiGqp6iYcGV7VHJLgphlyBb6BrfdTgn0lnMLrcpoWFbG2BtKZUwxzUXccJblsK6Sw"
            />
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-[300px]">
            <Image
              width={1000}
              height={1000}
              alt="Atelier de cartografiere"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="hands holding a complex topographic map and a tactical compass over a rustic wooden table with technical gear nearby"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmxFvzxZ65IjeTYg3pgqPeNL4yVi18ikCokzej6XLY5hcKNMyWJnZOFBaylVp0wwd7w5qRIImjOH2-8mSn-qH87abcRIfM3lGsI9wTTzbbS_S2yTwV0AwJ-eHhTfj-G3SnjFqlSem8E89o8aib7HTfwlPUktC_c87O1Qvp3jMh9hQs993USHytI_6By7EZZLUkZdiS96QLwA36eLd1leQURTUxWhJ_G4XYNvwWXPxnmqT-2ZUoPSriEBAi8cd1t-QMJYaGa7M0Ec8"
            />
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          {/* Wide Inset Grid */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px]">
            <Image
              width={1000}
              height={1000}
              alt="Traseu de antrenament"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="low angle shot of a runner disappearing into a majestic pine forest during an autumn training session with golden lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxtwaMlsjQ4l8K8LBFhqYyqFwywTG8DY3q3q__XjKjXB4Lh58H5HNTcDj-DLgeQnWSglD93ROqMVbuvAHiC179I4ohBa5K3N0JjIO1odQgJzvRmyDXqtAz5N_fmcVWfqlrkWQuDsh55N-YZ7OF7M2Z6-dny3NOQt_qx34cW8MM2Cgil5ieg1l6Eh0MAKWk4JnWQ_5aC3AEcPX8lQy2E1dnejZj0idS1NK_E1KRQAYdeYv7zqNvrgBq-4V-PUTOLjt3p5Y6C7veHeU"
            />
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="md:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px]">
            <Image
              width={1000}
              height={1000}
              alt="Fotografie de echipă"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-alt="orienteering team celebrating together at the podium after a successful championship with medals and flags in a stadium"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLlHsvgzy6CW-d057XCW2tnAiC4O0ng36o0KH0YRSZH7EEIMzMQd6-hEUqNwm5xlSaHfkkg0Q2wDSdzYlcrB6eP5yhZniUZBgxHSwnBoZYfh7Xkvh-rbu6PsBvCeDoEEP_de69fG08tpppUJUYDDhcsaRHDlAx5rZu73BHiQPommHCaX327besBRuJdA-rRq6dmtDgwYyIXhhsbE-T987G4HRDl8QgWyKGnAT0b3Oa5ybFfCaRDSDd8vpNBy69ExtKJwmR80v4RHQ"
            />
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </section>
        {/* Pagination/Load More */}
        <div className="mt-20 flex flex-col items-center">
          <button className="group flex items-center gap-4 text-zinc-900 font-headline font-bold text-xl uppercase">
            Încarcă mai multă precizie
            <span className="material-symbols-outlined kinetic-gradient p-4 text-white rounded-full group-hover:scale-110 transition-transform">
              add
            </span>
          </button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
