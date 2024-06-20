"use client";
import { wait } from "@/lib/wait";

const suspended = async () => {
  await wait(4000);
  return "home";
};

export default function SlowComponent() {
  return <p>{suspended()}</p>;
}
