"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
      const [mode, setMode] = useState<"signup" | "login">("signup");
      const [showPassword, setShowPassword] = useState(false);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");
      const [messageType, setMessageType] = useState<"success" | "error" | "">("");

      const router = useRouter();

      async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            setMessage("");
            setMessageType("");
            setLoading(true);

            try {
                  const endpoint =
                        mode === "signup" ? "/api/auth/signup" : "/api/auth/login";

                  const payload =
                        mode === "signup"
                              ? { name: name.trim(), email: email.trim(), password }
                              : { email: email.trim(), password };

                  const response = await fetch(endpoint, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                  });

                  const result = await response.json();

                  if (!response.ok) {
                        setMessage(result.message || "Request failed. Please try again.");
                        setMessageType("error");
                        return;
                  }

                  if (mode === "signup") {
                        setMessage("Account created successfully!");
                        setMessageType("success");
                        setName("");
                        setEmail("");
                        setPassword("");
                        router.push("/dashboard");
                  } else {
                        setMessage("Login successful!");
                        setMessageType("success");
                        setName("");
                        setEmail("");
                        setPassword("");
                        router.push("/dashboard");
                  }
            } catch {
                  setMessage("Server se connect nahi ho pa raha. Please try again.");
                  setMessageType("error");
            } finally {
                  setLoading(false);
            }
      }

      function changeMode(nextMode: "signup" | "login") {
            setMode(nextMode);
            setMessage("");
            setMessageType("");
            setPassword("");
      }

      return (
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
                              onClick={() => changeMode("signup")}
                              className={`rounded-lg py-3 text-sm font-medium transition ${mode === "signup"
                                    ? "bg-orange-500 text-white"
                                    : "text-zinc-400 hover:text-white"
                                    }`}
                        >
                              Sign up
                        </button>
                        <button
                              type="button"
                              onClick={() => changeMode("login")}
                              className={`rounded-lg py-3 text-sm font-medium transition ${mode === "login"
                                    ? "bg-orange-500 text-white"
                                    : "text-zinc-400 hover:text-white"
                                    }`}
                        >
                              Login
                        </button>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
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
                                          minLength={2}
                                          maxLength={80}
                                          placeholder="Jaise: Rahul Patil"
                                          className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-600 focus:border-orange-400"
                                          value={name}
                                          onChange={(event) => setName(event.target.value)}
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
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                              />
                        </div>

                        <div>
                              <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm text-zinc-300"
                              >
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
                                          minLength={mode === "signup" ? 8 : 1}
                                          maxLength={72}
                                          placeholder={
                                                mode === "signup"
                                                      ? "Kam se kam 8 characters"
                                                      : "Apna password enter karo"
                                          }
                                          className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-zinc-600"
                                          value={password}
                                          onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <button
                                          type="button"
                                          onClick={() => setShowPassword((current) => !current)}
                                          className="px-4 text-xs text-zinc-400 hover:text-white"
                                    >
                                          {showPassword ? "Hide" : "Show"}
                                    </button>
                              </div>
                        </div>

                        <button
                              type="submit"
                              disabled={loading}
                              className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#191a18] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                              {loading
                                    ? "Please wait..."
                                    : mode === "signup"
                                          ? "Create contractor account →"
                                          : "Login →"}
                        </button>

                        {message && (
                              <p
                                    role="status"
                                    aria-live="polite"
                                    className={`text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"
                                          }`}
                              >
                                    {message}
                              </p>
                        )}
                  </form>

                  <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
                        Account banakar aap apne construction projects manage kar sakte hain.
                        <br />
                        Homeowner ko baad mein secure invite link se joda jayega.
                  </p>
            </div>
      );
}
