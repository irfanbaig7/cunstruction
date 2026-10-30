
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101110] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-xl">
            S
          </div>
          <span className="text-xl font-bold tracking-tight">
            Site<span className="text-orange-400">Proof</span>
          </span>
        </a>
        <span className="hidden text-sm text-zinc-400 sm:block">
          Construction ka poora hisaab. Ek jagah.
        </span>
      </nav>

      <section className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Built for India's construction sites
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Ghar aapka.
            <br />
            <span className="text-orange-400">Hisaab bhi aapka.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            Construction ka daily progress, photos, material aur kharch —
            sab apne phone par dekho. Har update ka record, bina baar-baar
            site par jaaye.
          </p>

          <div className="mt-10 space-y-5">
            {[
              ["01", "Daily progress aur construction photos"],
              ["02", "Material, bills aur payment ka hisaab"],
              ["03", "AI assistant se project ke sawaal poochho"],
            ].map(([number, text]) => (
              <div key={number} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-orange-400">
                  {number}
                </span>
                <span className="text-sm text-zinc-300 sm:text-base">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-zinc-500">
            Clear records. Better visibility. More confidence.
          </p>
        </div>

        <AuthForm />
      </section>

      <footer className="border-t border-white/5 px-6 py-5 text-center text-xs text-zinc-500">
        SiteProof · Construction transparency, made simple.
      </footer>
    </main>
  );
}
