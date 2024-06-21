import { redirect } from "next/navigation";

export const rdr = async () => {
  return new Promise((resolve) => {
    setTimeout((resolve) => redirect("/"), 2000);
  });
};
