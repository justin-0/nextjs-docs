import Link from "next/link";

export default async function RootPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <p>{data.title}</p>
    </>
  );
}
