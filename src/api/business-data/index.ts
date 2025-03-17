import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { DataForSeoClient } from "../client.js";
import { registerTool } from "../tools.js";
import { DataForSeoResponse } from "../types.js";

export function registerBusinessDataTools(server: McpServer, apiClient: DataForSeoClient) {
  // Business Data Google My Business Info
  registerTool(
    server,
    "business_data_google_my_business_info",
    z.object({
      keyword: z.string().describe("Business name or related keyword"),
      location_name: z.string().optional().describe("Location name"),
      location_code: z.number().optional().describe("Location code"),
      language_name: z.string().optional().describe("Language name"),
      language_code: z.string().optional().describe("Language code")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/business_data/google/my_business_info/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Business Data Google Reviews
  registerTool(
    server,
    "business_data_google_reviews",
    z.object({
      keyword: z.string().optional().describe("Business name or related keyword"),
      place_id: z.string().optional().describe("Google Place ID"),
      depth: z.number().optional().describe("Number of reviews to retrieve"),
      sort_by: z.enum(["relevance", "newest"]).optional().describe("Sorting method"),
      language_name: z.string().optional().describe("Language name"),
      language_code: z.string().optional().describe("Language code")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/business_data/google/reviews/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Business Data Google Locations
  registerTool(
    server,
    "business_data_google_locations",
    z.object({
      country: z.string().optional().describe("Filter locations by country name")
    }),
    async (params, client) => {
      const url = params.country 
        ? `/business_data/google/locations?country=${encodeURIComponent(params.country)}`
        : "/business_data/google/locations";
        
      const response = await client.get<DataForSeoResponse<any>>(url);
      
      return response;
    }
  );
  
  // Business Data Google Languages
  registerTool(
    server,
    "business_data_google_languages",
    {},
    async (_params, client) => {
      const response = await client.get<DataForSeoResponse<any>>("/business_data/google/languages");
      
      return response;
    }
  );
  
  // Business Data TripAdvisor Search
  registerTool(
    server,
    "business_data_tripadvisor_search",
    z.object({
      keyword: z.string().describe("Business name or related keyword"),
      location_name: z.string().optional().describe("Location name"),
      priority: z.number().min(1).max(2).optional().describe("Priority: 1 (normal) or 2 (high)"),
      depth: z.number().optional().describe("Number of results to return"),
      limit: z.number().optional().describe("Maximum number of results to return per page"),
      offset: z.number().optional().describe("Offset for pagination")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/business_data/tripadvisor/search/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Business Data TripAdvisor Reviews
  registerTool(
    server,
    "business_data_tripadvisor_reviews",
    z.object({
      location_id: z.string().describe("TripAdvisor location ID"),
      depth: z.number().optional().describe("Number of reviews to retrieve"),
      offset: z.number().optional().describe("Offset for pagination"),
      sort_by: z.enum(["relevance", "date_of_visit"]).optional().describe("Sorting method"),
      language_name: z.string().optional().describe("Language name"),
      language_code: z.string().optional().describe("Language code")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/business_data/tripadvisor/reviews/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Business Data Trustpilot Search
  registerTool(
    server,
    "business_data_trustpilot_search",
    z.object({
      keyword: z.string().describe("Business name or related keyword"),
      location_name: z.string().optional().describe("Location name"),
      depth: z.number().optional().describe("Number of results to return"),
      limit: z.number().optional().describe("Maximum number of results to return per page"),
      offset: z.number().optional().describe("Offset for pagination"),
      language_name: z.string().optional().describe("Language name"),
      language_code: z.string().optional().describe("Language code")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/business_data/trustpilot/search/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Business Data Trustpilot Reviews
  registerTool(
    server,
    "business_data_trustpilot_reviews",
    z.object({
      domain: z.string().describe("Business domain"),
      depth: z.number().optional().describe("Number of reviews to retrieve"),
      offset: z.number().optional().describe("Offset for pagination"),
      limit: z.number().optional().describe("Maximum number of results to return per page"),
      sort_by: z.enum(["recency", "relevance"]).optional().describe("Sorting method"),
      language_name: z.string().optional().describe("Language name"),
      language_code: z.string().optional().describe("Language code")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/business_data/trustpilot/reviews/live",
        [params]
      );
      
      return response;
    }
  );
}