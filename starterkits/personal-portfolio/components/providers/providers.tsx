import { MotionProvider } from "@/components/providers/motion-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
