"use client";

import { useParams } from "next/navigation";

export default function ParamsHeading() {
  const params = useParams();

  return <h1 className="text-3xl">{params.userId}</h1>;
}
