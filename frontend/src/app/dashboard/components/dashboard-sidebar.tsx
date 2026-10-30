
import Link from "next/link";

const navigation = [
      { label: "Overview", icon: "▦", active: true },
      { label: "My projects", icon: "▤", active: false },
      { label: "Expenses", icon: "₹", active: false },
      { label: "Materials", icon: "▧", active: false },
      { label: "Reports", icon: "▥", active: false },
];

export default function DashboardSidebar() {
      return (
            <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#151614] p-6 lg:flex lg:flex-col">
                  <Link href="/dashboard" className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-black">
                              S
                        </span>

                        <span className="text-xl font-bold">
                              Site<span className="text-orange-400">Proof</span>
                        </span>
                  </Link>

                  <p className="mb-4 mt-12 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        Workspace
                  </p>

                  <nav className="space-y-2">
                        {navigation.map((item) => (
                              <div
                                    key={item.label}
                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${item.active
                                                ? "border border-orange-500/20 bg-orange-500/10 text-orange-400"
                                                : "text-zinc-400"
                                          }`}
                              >
                                    <span className="w-5 text-center">{item.icon}</span>

                                    {item.label}

                                    {!item.active && (
                                          <span className="ml-auto text-xs text-zinc-600">
                                                Soon
                                          </span>
                                    )}
                              </div>
                        ))}
                  </nav>

                  <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm font-semibold">Need a hand?</p>

                        <p className="mt-2 text-xs leading-5 text-zinc-400">
                              Your construction records, organised in one place.
                        </p>
                  </div>
            </aside>
      );
}
