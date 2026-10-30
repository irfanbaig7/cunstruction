
import { createProject } from "../actions";

export default function ProjectForm() {
      return (
            <section
                  id="new-project"
                  className="scroll-mt-6 rounded-2xl border border-orange-500/30 bg-[#191a18] p-6"
            >
                  <div className="mb-6">
                        <h3 className="text-lg font-semibold text-orange-400">
                              Create a construction project
                        </h3>

                        <p className="mt-1 text-sm text-zinc-400">
                              Add your project details to get started.
                        </p>
                  </div>

                  <form action={createProject} className="grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                              <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
                                    Project name *
                              </label>

                              <input
                                    id="name"
                                    name="name"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                    placeholder="e.g. My new home"
                                    className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3 text-sm outline-none focus:border-orange-400"
                              />
                        </div>

                        <div className="sm:col-span-2">
                              <label htmlFor="description" className="mb-2 block text-sm text-zinc-300">
                                    Description
                              </label>

                              <textarea
                                    id="description"
                                    name="description"
                                    maxLength={1000}
                                    rows={3}
                                    placeholder="Brief details about your project"
                                    className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3 text-sm outline-none focus:border-orange-400"
                              />
                        </div>

                        <div>
                              <label htmlFor="location" className="mb-2 block text-sm text-zinc-300">
                                    Project location
                              </label>

                              <input
                                    id="location"
                                    name="location"
                                    maxLength={200}
                                    placeholder="City or site address"
                                    className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3 text-sm outline-none focus:border-orange-400"
                              />
                        </div>

                        <div>
                              <label htmlFor="budget" className="mb-2 block text-sm text-zinc-300">
                                    Estimated budget (₹)
                              </label>

                              <input
                                    id="budget"
                                    name="budget"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="e.g. 1500000"
                                    className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3 text-sm outline-none focus:border-orange-400"
                              />
                        </div>

                        <div>
                              <label htmlFor="startDate" className="mb-2 block text-sm text-zinc-300">
                                    Planned start date
                              </label>

                              <input
                                    id="startDate"
                                    name="startDate"
                                    type="date"
                                    className="w-full rounded-xl border border-white/10 bg-[#101110] px-4 py-3 text-sm outline-none focus:border-orange-400"
                              />
                        </div>

                        <div className="flex items-end">
                              <button
                                    type="submit"
                                    className="w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-400"
                              >
                                    Create project →
                              </button>
                        </div>
                  </form>
            </section>
      );
}
