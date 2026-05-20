import type { Metadata } from "next";
import HomeClient from "@/app/HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Manas Patil's Portfolio",
  },
};

export default function Home() {
  return <HomeClient />;
}
