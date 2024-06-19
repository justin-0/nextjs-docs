export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-blue-200">
      <div className="text-center">This is a div from the Dashboard Layout</div>
      {children}
    </section>
  );
}
