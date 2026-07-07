import { apiClient } from "@/services/apiClient";

// analyticsService: data-access for dashboard KPIs and chart series.
export const analyticsService = {
  /** @returns {Promise<import("@/types").AnalyticsMetric[]>} */
  async getMetrics() {
    // return apiClient.get("/analytics/metrics");
    return [];
  },
};
