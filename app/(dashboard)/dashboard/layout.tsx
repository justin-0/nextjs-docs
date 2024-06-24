import { rdr } from "@/lib/redirecting";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fn = rdr;
  // await fn();
  return (
    <section className="bg-blue-200">
      <div className="text-center">This is a div from the Dashboard Layout</div>
      {children}
    </section>
  );
}
