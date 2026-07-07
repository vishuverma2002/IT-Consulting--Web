import { apiClient } from "@/services/apiClient";

export async function sendContactForm({ name, email, phone, problem, message }) {
  return apiClient.post("/contact", { name, email, phone, problem, message });
}
