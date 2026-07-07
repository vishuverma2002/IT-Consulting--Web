import { apiClient } from "@/services/apiClient";

export async function sendChatMessage({ message, pageUrl }) {
  return apiClient.post("/chat", { message, pageUrl });
}
