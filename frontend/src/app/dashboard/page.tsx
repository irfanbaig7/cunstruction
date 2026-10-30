import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import DashboardSidebar from "./components/dashboard-sidebar";
import ProjectForm from "./components/project-form";
import DashboardStats from "./components/dashboard-stats";
import ProjectsSection from "./components/projects-section";
import RecentActivity from "./components/recent-activity";

export const instant = false;

export default async function DashboardPage() {
      const user = await getCurrentUser();

      if (!user) redirect("/");

      const displayName = user.email.split("@")[0];

      const projects = await prisma.project.findMany({
            where: { ownerId: user.id },
            orderBy: { createdAt: "desc" },
      });

      const projectCards = projects.map((project) => ({
            id: project.id,
            name: project.name,
            location: project.location,
            description: project.description,
            budget: project.budget === null ? null : Number(project.budget),
            startDate: project.startDate
                  ? project.startDate.toISOString()
                  : null,
      }));

      return (
            <main className="min-h-screen bg-[#101110] text-white">
                  <div className="flex min-h-screen">
                        <DashboardSidebar />

                        <section className="min-w-0 flex-1">
                              <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8">
                                    <div className="flex items-center gap-3">
                                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-black lg:hidden">
                                                S
                                          </span>

                                          <div>
                                                <p className="text-sm text-zinc-400">
                                                      Contractor workspace
                                                </p>

                                                <h1 className="mt-1 text-lg font-bold">
                                                      Overview
                                                </h1>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                          <div className="hidden text-right sm:block">
                                                <p className="text-sm font-medium">{displayName}</p>

                                                <p className="text-xs text-zinc-500">
                                                      Contractor account
                                                </p>
                                          </div>

                                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 font-semibold text-orange-400">
                                                {displayName.charAt(0).toUpperCase()}
                                          </div>
                                    </div>
                              </header>

                              <div className="mx-auto max-w-7xl space-y-8 p-5 sm:p-8">

                                    {/* Shared toggle for both create-project triggers */}
                                    <input
                                          type="checkbox"
                                          id="create-project-toggle"
                                          aria-label="Toggle create project form"
                                          className="peer sr-only"
                                    />

                                    {/* Dashboard heading and main button */}
                                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                          <div>
                                                <p className="text-sm text-orange-400">
                                                      YOUR PROJECTS, AT A GLANCE
                                                </p>

                                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                                      Namaste, {displayName}
                                                </h2>

                                                <p className="mt-2 text-sm text-zinc-400">
                                                      Yahan se apne construction ka poora hisaab manage karein.
                                                </p>
                                          </div>

                                          <label
                                                htmlFor="create-project-toggle"
                                                className="cursor-pointer rounded-xl bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-400"
                                          >
                                                + New project
                                          </label>
                                    </div>

                                    {/* Project form: hidden until either trigger is clicked */}
                                    <div className="hidden peer-checked:block">
                                          <ProjectForm />
                                    </div>

                                    <DashboardStats totalProjects={projects.length} />

                                    <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                                          <ProjectsSection projects={projectCards} />

                                          <RecentActivity />
                                    </div>

                                    <p className="border-t border-white/10 pt-5 text-xs text-zinc-500">
                                          SiteProof · Construction transparency, made simple.
                                    </p>

                              </div>
                        </section>
                  </div>
            </main>
      );
}