"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RegistrationModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop flex items-center justify-center p-4"
      id="registrationModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="kinetic-gradient p-6 text-white flex justify-between items-center">
          <h2 className="font-headline font-black text-xl uppercase tracking-widest">
            Formular Înscriere
          </h2>
          <button
            className="hover:scale-110 transition-transform"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form
          className="p-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Înscriere trimisă cu succes!");
            onClose();
          }}
        >
          <div className="space-y-1">
            <label className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Nume Complet
            </label>
            <input
              className="w-full bg-zinc-50 border-zinc-200 focus:border-primary focus:ring-primary rounded-md text-sm py-3 px-4 outline-none transition-all"
              placeholder="ex: Andrei Popescu"
              required
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Email
            </label>
            <input
              className="w-full bg-zinc-50 border-zinc-200 focus:border-primary focus:ring-primary rounded-md text-sm py-3 px-4 outline-none transition-all"
              placeholder="ex: andrei@exemplu.ro"
              required
              type="email"
            />
          </div>
          <div className="space-y-1">
            <label className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Telefon
            </label>
            <input
              className="w-full bg-zinc-50 border-zinc-200 focus:border-primary focus:ring-primary rounded-md text-sm py-3 px-4 outline-none transition-all"
              placeholder="ex: 0722 123 456"
              required
              type="tel"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <button
              className="flex-1 px-6 py-4 border-2 border-zinc-200 text-zinc-600 font-label font-black text-xs tracking-widest uppercase rounded-md hover:bg-zinc-50 transition-colors"
              onClick={onClose}
              type="button"
            >
              Anulează
            </button>
            <button
              className="flex-1 px-6 py-4 kinetic-gradient text-white font-label font-black text-xs tracking-widest uppercase rounded-md shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
              type="submit"
            >
              Trimite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
