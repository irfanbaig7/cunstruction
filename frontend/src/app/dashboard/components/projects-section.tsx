type ProjectCard = {
      id: string;
      name: string;
      location: string | null;
      description: string | null;
      budget: number | null;
      startDate: string | null;
};

export default function ProjectsSection({
      projects,
}: {
      projects: ProjectCard[];
}) {
      return (
            <section className="rounded-2xl border border-white/10 bg-[#191a18] p-6">
                  <div className="flex items-center justify-between gap-3">
                        <div>
                              <h3 className="text-lg font-semibold">
                                    Recent projects
                              </h3>

                              <p className="mt-1 text-sm text-zinc-400">
                                    Your latest construction work
                              </p>
                        </div>

                        <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400">
                              {projects.length}{" "}
                              {projects.length === 1 ? "project" : "projects"}
                        </span>
                  </div>

                  {projects.length === 0 ? (
                        <div className="flex min-h-64 flex-col items-center justify-center py-10 text-center">
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl text-orange-400">
                                    +
                              </div>

                              <h4 className="mt-5 font-semibold">
                                    Your first project starts here
                              </h4>

                              <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">
                                    Create a project to organise your construction work.
                              </p>

                              <label
                                    htmlFor="create-project-toggle"
                                    className="mt-5 cursor-pointer text-sm font-semibold text-orange-400 hover:text-orange-300"
                              >
                                    Create your first project →
                              </label>
                        </div>
                  ) : (
                        <div className="mt-6 space-y-3">
                              {projects.map((project) => (
                                    <article
                                          key={project.id}
                                          className="rounded-xl border border-white/10 bg-black/20 p-4"
                                    >
                                          <h4 className="font-semibold">
                                                {project.name}
                                          </h4>

                                          {project.location && (
                                                <p className="mt-1 text-sm text-zinc-400">
                                                      {project.location}
                                                </p>
                                          )}

                                          {project.description && (
                                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                                      {project.description}
                                                </p>
                                          )}

                                          <div className="mt-3 flex flex-wrap gap-4 text-xs text-zinc-500">
                                                {project.budget !== null && (
                                                      <span>
                                                            Budget: ₹
                                                            {project.budget.toLocaleString("en-IN")}
                                                      </span>
                                                )}

                                                {project.startDate && (
                                                      <span>
                                                            Start date:{" "}
                                                            {new Date(project.startDate).toLocaleDateString(
                                                                  "en-IN",
                                                                  {
                                                                        day: "numeric",
                                                                        month: "short",
                                                                        year: "numeric",
                                                                        timeZone: "UTC",
                                                                  }
                                                            )}
                                                      </span>
                                                )}
                                          </div>
                                    </article>
                              ))}
                        </div>
                  )}
            </section>
      );
}