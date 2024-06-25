import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("dashboard");
}

export const config = {
  matcher: "/dashboard",
};
