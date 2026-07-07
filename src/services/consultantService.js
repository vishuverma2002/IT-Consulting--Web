import { apiClient } from "@/services/apiClient";

// consultantService: data-access for the consultant profile entity.
export const consultantService = {
  /** @returns {Promise<import("@/types").Consultant|null>} */
  async getCurrent() {
    // return apiClient.get("/me");
    return null;
  },
};
