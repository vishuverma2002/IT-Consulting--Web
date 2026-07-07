import { apiClient } from "@/services/apiClient";

// appointmentService: data-access for scheduled sessions.
export const appointmentService = {
  /** @returns {Promise<import("@/types").Appointment[]>} */
  async list() {
    // return apiClient.get("/appointments");
    return [];
  },
};
