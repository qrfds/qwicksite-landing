import { aiTxt, discoveryResponse } from "@/lib/ai-discovery";

export function GET() {
  return discoveryResponse(aiTxt());
}
