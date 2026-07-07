import { apiClient } from "@/services/apiClient";

// clientService: domain data-access for clients.
// PATTERN: one service module per domain entity. Pages/server components import
// these (NOT apiClient directly) so the rest of the app speaks in domain terms
// ("getClients") rather than HTTP details. Bodies are stubs — wire to real
// endpoints later. No UI, no formatting, no React here.

export const clientService = {
  /** @returns {Promise<import("@/types").Client[]>} */
  async list() {
    // return apiClient.get("/clients");
    return [];
  },
  /** @param {string} id */
  async getById(id) {
    // return apiClient.get(`/clients/${id}`);
    return null;
  },
};
