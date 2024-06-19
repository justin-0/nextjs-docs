"use client";

import { redirect, usePathname, useRouter } from "next/navigation";

export default function DashboardPage() {
  const path = usePathname();
  const router = useRouter();
  return (
    <>
      <h1>Hello from {path}</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
}
