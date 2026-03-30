import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Forge Studios",
  description:
    "Explore current career opportunities at Forge Studios and apply to join our engineering team.",
};

export default function CareersPage() {
  return <CareersClient />;
}
