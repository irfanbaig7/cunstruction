
import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const projectSchema = z.object({
      name: z.string().trim().min(2).max(100),
      description: z.string().trim().max(1000).optional(),
      location: z.string().trim().max(200).optional(),
      budget: z.number().nonnegative().optional(),
      startDate: z.iso.datetime().optional(),
});

export async function POST(request: Request) {
      try {
            const user = await getCurrentUser();

            if (!user) {
                  return NextResponse.json(
                        { message: "Please login to create a project." },
                        { status: 401 }
                  );
            }

            const body: unknown = await request.json();
            const validation = projectSchema.safeParse(body);

            if (!validation.success) {
                  return NextResponse.json(
                        { message: "Please enter a valid project name and details." },
                        { status: 400 }
                  );
            }

            const { name, description, location, budget, startDate } =
                  validation.data;

            const project = await prisma.project.create({
                  data: {
                        name,
                        description: description || null,
                        location: location || null,
                        ...(budget !== undefined ? { budget } : {}),
                        ...(startDate ? { startDate: new Date(startDate) } : {}),
                        ownerId: user.id,
                  },
            });

            return NextResponse.json(
                  { message: "Project created successfully.", project },
                  { status: 201 }
            );
      } catch (error) {
            console.error("Create project error:", error);

            return NextResponse.json(
                  { message: "Unable to create project. Please try again." },
                  { status: 500 }
            );
      }
}
