import { discoveryResponse, llmsFullTxt } from "@/lib/ai-discovery";

export function GET() {
  return discoveryResponse(llmsFullTxt(), "text/markdown; charset=utf-8");
}
