
export default function DashboardStats({
      totalProjects,
}: {
      totalProjects: number;
}) {
      const stats = [
            {
                  label: "Total projects",
                  value: String(totalProjects),
                  note: "Your construction projects",
                  icon: "▦",
            },
            {
                  label: "Ongoing projects",
                  value: "—",
                  note: "Project status tracking comes next",
                  icon: "↗",
            },
            {
                  label: "Total expenses",
                  value: "₹0",
                  note: "Expense tracking comes next",
                  icon: "₹",
            },
            {
                  label: "Pending payments",
                  value: "₹0",
                  note: "Payment tracking comes next",
                  icon: "◷",
            },
      ];

      return (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat) => (
                        <article
                              key={stat.label}
                              className="rounded-2xl border border-white/10 bg-[#191a18] p-5"
                        >
                              <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm text-zinc-400">{stat.label}</p>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-sm font-bold text-orange-400">
                                          {stat.icon}
                                    </span>
                              </div>

                              <p className="mt-5 text-3xl font-bold">{stat.value}</p>

                              <p className="mt-2 text-xs text-zinc-500">{stat.note}</p>
                        </article>
                  ))}
            </div>
      );
}
