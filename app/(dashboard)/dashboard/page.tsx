"use client";

import SlowComponent from "@/components/slow-comp";
import { redirect, usePathname, useRouter } from "next/navigation";
import { Suspense } from "react";

export default function DashboardPage() {
  const path = usePathname();
  const router = useRouter();
  return (
    <>
      <h1>Hello from {path}</h1>
      <Suspense fallback={<p>Loading Slow Component....</p>}>
        <SlowComponent />
      </Suspense>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
}
