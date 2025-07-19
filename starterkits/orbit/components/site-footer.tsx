import { ModeSwitcher } from "@/components/mode-switcher";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="px-4 xl:px-6 flex container items-center justify-center">
      <div className="border-t flex items-center h-14 justify-between w-full">
        <p className="text-foreground/40 text-xs">
          {siteConfig.footer.copyright}
        </p>

        <ModeSwitcher />
      </div>
    </footer>
  );
}
