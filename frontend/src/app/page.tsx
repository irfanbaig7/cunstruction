
"use client";

import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [showPassword, setShowPassword] = useState(false);

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

        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-[#191a18] p-6 shadow-2xl shadow-black/30 sm:p-9">
          <div className="mb-8">
            <p className="text-sm font-medium text-orange-400">
              CONTRACTOR WORKSPACE
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              {mode === "signup" ? "Apna account banao" : "Wapas aao"}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              {mode === "signup"
                ? "Apne construction projects ko ek jagah manage karo."
                : "Apne construction projects ko access karo."}
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 rounded-xl bg-black/30 p-1">
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`rounded-lg py-3 text-sm font-medium transition ${mode === "signup"
                  ? "bg-orange-500 text-white"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Sign up
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-lg py-3 text-sm font-medium transition ${mode === "login"
                  ? "bg-orange-500 text-white"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Login
            </button>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "UI ready hai. Account creation aur login backend agle step mein connect karenge."
              );
            }}
          >
            {mode === "signup" && (
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
                  Aapka poora naam
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Jaise: Rahul Patil"
                  className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-600 focus:border-orange-400"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-600 focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm text-zinc-300">
                Password
              </label>
              <div className="flex rounded-xl border border-white/10 bg-[#101110] focus-within:border-orange-400">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    mode === "signup" ? "new-password" : "current-password"
                  }
                  required
                  minLength={8}
                  placeholder="Kam se kam 8 characters"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-zinc-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 text-xs text-zinc-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#191a18]"
            >
              {mode === "signup" ? "Create contractor account →" : "Login →"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
            Account banakar aap apne construction projects manage kar sakte hain.
            <br />
            Homeowner ko baad mein secure invite link se joda jayega.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-5 text-center text-xs text-zinc-500">
        SiteProof · Construction transparency, made simple.
      </footer>
    </main>
  );
}
