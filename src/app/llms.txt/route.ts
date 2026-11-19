import { discoveryResponse, llmsTxt } from "@/lib/ai-discovery";

export function GET() {
  return discoveryResponse(llmsTxt(), "text/plain; charset=utf-8");
}
