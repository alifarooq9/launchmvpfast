import { ModeSwitcher } from "@/components/mode-switcher";

export function SiteFooter() {
  return (
    <footer className="px-4 xl:px-6 flex container items-center justify-center">
      <div className="border-t flex items-center h-12 justify-between w-full">
        <p className="text-foreground/40 text-xs">
          © {new Date().getFullYear()} Orbit - launchmvpfast.com
        </p>

        <ModeSwitcher />
      </div>
    </footer>
  );
}
