import { Hero } from "@/components/landing/hero";
import { SelectedProjects } from "@/components/landing/selected-projects";

export default function Home() {
  return (
    <main className="flex items-start gap-20 py-36 flex-col justify-center container">
      <Hero />
      <SelectedProjects />
    </main>
  );
}
