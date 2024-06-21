"use client";
import { wait } from "@/lib/wait";

const suspended = async () => {
  await wait(4000);
  return "Home";
};

export default function SlowComponent() {
  return (
    <div>
      <p>{suspended()}</p>;
    </div>
  );
}
