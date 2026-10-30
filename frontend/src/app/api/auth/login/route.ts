
import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { z } from "zod";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
      email: z.string().trim().email().transform((v) => v.toLowerCase()),
      password: z.string().min(1).max(72),
});

export async function POST(request: Request) {
      try {
            const body: unknown = await request.json();
            const parsed = loginSchema.safeParse(body);

            if (!parsed.success) {
                  return NextResponse.json(
                        { message: "Please enter a valid email and password." },
                        { status: 400 }
                  );
            }

            const { email, password } = parsed.data;

            const user = await prisma.user.findUnique({
                  where: { email },
            });

            if (!user || !(await compare(password, user.passwordHash))) {
                  return NextResponse.json(
                        { message: "Invalid email or password." },
                        { status: 401 }
                  );
            }

            const secret = process.env.JWT_SECRET;
            if (!secret || secret.length < 32) {
                  console.error("JWT_SECRET must be set to a random secret of at least 32 characters.");
                  return NextResponse.json(
                        { message: "Server authentication is not configured." },
                        { status: 500 }
                  );
            }

            const token = await new SignJWT({
                  email: user.email,
                  role: user.role,
            })
                  .setProtectedHeader({ alg: "HS256" })
                  .setSubject(user.id)
                  .setIssuedAt()
                  .setExpirationTime("7d")
                  .sign(new TextEncoder().encode(secret));

            const cookieStore = await cookies();
            cookieStore.set("siteproof_session", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  sameSite: "lax",
                  path: "/",
                  maxAge: 60 * 60 * 24 * 7,
            });

            return NextResponse.json({
                  message: "Login successful.",
                  user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                  },
            });
      } catch (error) {
            console.error("Login error:", error);
            return NextResponse.json(
                  { message: "Unable to log in right now." },
                  { status: 500 }
            );
      }
}
