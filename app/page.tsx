import Link from "next/link";

export default async function RootPage() {
  const response = await fetch(
    `http://localhost:3000/api/greeting/${`hey mum`}/`
  );
  const data = await response.text();
  console.log(data);

  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
