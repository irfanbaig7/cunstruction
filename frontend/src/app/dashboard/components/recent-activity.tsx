
export default function RecentActivity() {
      return (
            <section className="rounded-2xl border border-white/10 bg-[#191a18] p-6">
                  <h3 className="text-lg font-semibold">Recent activity</h3>

                  <p className="mt-1 text-sm text-zinc-400">
                        Updates from your workspace
                  </p>

                  <div className="flex min-h-64 flex-col items-center justify-center py-10 text-center">
                        <span className="text-2xl text-zinc-600">◷</span>

                        <p className="mt-4 text-sm font-medium text-zinc-300">
                              No activity yet
                        </p>

                        <p className="mt-2 text-xs leading-5 text-zinc-500">
                              Project updates and expense records will appear here.
                        </p>
                  </div>
            </section>
      );
}
