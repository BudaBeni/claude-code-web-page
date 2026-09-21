import { ShaderBackground } from "@/components/ui/static-mesh-gradient-sea";

export default function ShaderBackgroundDemo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShaderBackground className="h-full w-full" />
    </div>
  );
}
