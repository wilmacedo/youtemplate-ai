import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">youtemplate.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Develop for 📚 purposes
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </main>
  );
}
