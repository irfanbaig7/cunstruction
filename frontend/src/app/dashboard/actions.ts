"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function createProject(formData: FormData) {
      const user = await getCurrentUser();

      if (!user) redirect("/");

      const name = String(formData.get("name") ?? "").trim();
      const description = String(formData.get("description") ?? "").trim();
      const location = String(formData.get("location") ?? "").trim();
      const budgetValue = String(formData.get("budget") ?? "").trim();
      const startDateValue = String(formData.get("startDate") ?? "").trim();

      if (name.length < 2 || name.length > 100) {
            throw new Error("Project name must be between 2 and 100 characters.");
      }

      if (description.length > 1000 || location.length > 200) {
            throw new Error("Description or location is too long.");
      }

      let budget: number | undefined;

      if (budgetValue !== "") {
            budget = Number(budgetValue);

            if (!Number.isFinite(budget) || budget < 0) {
                  throw new Error("Enter a valid project budget.");
            }
      }

      let startDate: Date | undefined;

      if (startDateValue !== "") {
            startDate = new Date(`${startDateValue}T00:00:00.000Z`);

            if (Number.isNaN(startDate.getTime())) {
                  throw new Error("Enter a valid start date.");
            }
      }

      await prisma.project.create({
            data: {
                  name,
                  description: description || null,
                  location: location || null,
                  ...(budget !== undefined ? { budget } : {}),
                  ...(startDate ? { startDate } : {}),
                  ownerId: user.id,
            },
      });

      revalidatePath("/dashboard");
      redirect("/dashboard");
}

export async function updateProject(formData: FormData) {
      const user = await getCurrentUser();

      if (!user) redirect("/");

      const projectId = String(formData.get("projectId") ?? "").trim();
      const name = String(formData.get("name") ?? "").trim();
      const description = String(formData.get("description") ?? "").trim();
      const location = String(formData.get("location") ?? "").trim();
      const budgetValue = String(formData.get("budget") ?? "").trim();
      const startDateValue = String(formData.get("startDate") ?? "").trim();

      if (!projectId) {
            throw new Error("Project not found.");
      }

      if (name.length < 2 || name.length > 100) {
            throw new Error("Project name must be between 2 and 100 characters.");
      }

      if (description.length > 1000 || location.length > 200) {
            throw new Error("Description or location is too long.");
      }

      let budget: number | null = null;

      if (budgetValue !== "") {
            budget = Number(budgetValue);

            if (!Number.isFinite(budget) || budget < 0) {
                  throw new Error("Enter a valid project budget.");
            }
      }

      let startDate: Date | null = null;

      if (startDateValue !== "") {
            startDate = new Date(`${startDateValue}T00:00:00.000Z`);

            if (Number.isNaN(startDate.getTime())) {
                  throw new Error("Enter a valid start date.");
            }
      }

      const result = await prisma.project.updateMany({
            where: {
                  id: projectId,
                  ownerId: user.id,
            },
            data: {
                  name,
                  description: description || null,
                  location: location || null,
                  budget,
                  startDate,
            },
      });

      if (result.count === 0) {
            throw new Error("Project not found or you cannot edit this project.");
      }

      revalidatePath("/dashboard");
      redirect("/dashboard");
}