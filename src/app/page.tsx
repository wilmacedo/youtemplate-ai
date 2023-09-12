import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Include the prompt for AI..."
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Result genereted by  AI..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Tip: use <code className="text-blue-400">{"{transcription}"}</code>{" "}
            variable in your prompt to add the content to transcription of your
            selected video
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="flex border rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Select a video
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label className="transcriptionPrompt">
                Transcription prompt
              </Label>
              <Textarea
                id="transcriptionPrompt"
                className="h-20 resize-none leading-relaxed"
                placeholder="Include mentioned keyword in the video separated by comma (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Load video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt..."></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Youtube Title</SelectItem>
                  <SelectItem value="description">
                    Youtube Description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {`You'll`} can customize this option in the future.
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} />
              <p className="text-xs text-muted-foreground leading-normal">
                High values can make the result more creative and prone to
                errors.
              </p>
            </div>

            <Separator />

            <Button className="w-full" type="submit">
              Execute <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
