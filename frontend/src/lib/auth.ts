
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function getCurrentUser() {
      const token = (await cookies()).get("siteproof_session")?.value;
      const secret = process.env.JWT_SECRET;

      if (!token || !secret || secret.length < 32) {
            return null;
      }

      try {
            const { payload } = await jwtVerify(
                  token,
                  new TextEncoder().encode(secret),
                  { algorithms: ["HS256"] }
            );

            if (
                  typeof payload.sub !== "string" ||
                  typeof payload.email !== "string"
            ) {
                  return null;
            }

            return {
                  id: payload.sub,
                  email: payload.email,
                  role: typeof payload.role === "string" ? payload.role : "CONTRACTOR",
            };
      } catch {
            return null;
      }
}
