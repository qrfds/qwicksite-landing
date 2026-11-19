import { discoveryResponse, humansTxt } from "@/lib/ai-discovery";

export function GET() {
  return discoveryResponse(humansTxt());
}
