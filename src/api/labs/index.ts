import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { DataForSeoClient } from "../client.js";
import { registerTool } from "../tools.js";
import { DataForSeoResponse } from "../types.js";

// DataForSEO Labs API schemas
const keywordResearchBaseSchema = z.object({
  keyword: z.string().describe("Keyword(s) to research"),
  location_code: z.number().optional().describe("The location code for the search"),
  language_code: z.string().optional().describe("The language code for the search"),
  limit: z.number().optional().describe("Maximum number of results to return"),
  offset: z.number().optional().describe("Offset for pagination"),
  include_seed_keyword: z.boolean().optional().describe("Include the seed keyword in the results")
});

const domainResearchBaseSchema = z.object({
  target: z.string().describe("Target domain name"),
  location_code: z.number().optional().describe("The location code for the search"),
  language_code: z.string().optional().describe("The language code for the search"),
  limit: z.number().optional().describe("Maximum number of results to return"),
  offset: z.number().optional().describe("Offset for pagination")
});

export function registerLabsTools(server: McpServer, apiClient: DataForSeoClient) {
  // Keywords for Site
  registerTool(
    server,
    "labs_google_keywords_for_site",
    domainResearchBaseSchema.extend({
      include_serp_info: z.boolean().optional().describe("Include SERP information")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/keywords_for_site/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Related Keywords
  registerTool(
    server,
    "labs_google_related_keywords",
    keywordResearchBaseSchema,
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/related_keywords/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Keyword Suggestions
  registerTool(
    server,
    "labs_google_keyword_suggestions",
    keywordResearchBaseSchema,
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/keyword_suggestions/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Keyword Ideas
  registerTool(
    server,
    "labs_google_keyword_ideas",
    keywordResearchBaseSchema,
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/keyword_ideas/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Historical Search Volume
  registerTool(
    server,
    "labs_google_historical_search_volume",
    z.object({
      keywords: z.array(z.string()).describe("Keywords to get historical search volume for"),
      location_code: z.number().optional().describe("The location code for the search"),
      language_code: z.string().optional().describe("The language code for the search"),
      include_serp_info: z.boolean().optional().describe("Include SERP information")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/historical_search_volume/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Bulk Keyword Difficulty
  registerTool(
    server,
    "labs_google_bulk_keyword_difficulty",
    z.object({
      keywords: z.array(z.string()).describe("Keywords to calculate difficulty for"),
      location_code: z.number().optional().describe("The location code for the search"),
      language_code: z.string().optional().describe("The language code for the search")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/bulk_keyword_difficulty/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Search Intent
  registerTool(
    server,
    "labs_google_search_intent",
    z.object({
      keywords: z.array(z.string()).describe("Keywords to determine search intent"),
      location_code: z.number().optional().describe("The location code for the search"),
      language_code: z.string().optional().describe("The language code for the search")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/search_intent/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Categories for Domain
  registerTool(
    server,
    "labs_google_categories_for_domain",
    domainResearchBaseSchema,
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/categories_for_domain/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Domain Rank Overview
  registerTool(
    server,
    "labs_google_domain_rank_overview",
    domainResearchBaseSchema,
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/domain_rank_overview/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Ranked Keywords
  registerTool(
    server,
    "labs_google_ranked_keywords",
    domainResearchBaseSchema.extend({
      include_serp_info: z.boolean().optional().describe("Include SERP information"),
      filters: z.array(z.any()).optional().describe("Filters to apply to the results")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/ranked_keywords/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Competitors Domain
  registerTool(
    server,
    "labs_google_competitors_domain",
    domainResearchBaseSchema.extend({
      filters: z.array(z.any()).optional().describe("Filters to apply to the results")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/competitors_domain/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Domain Intersection
  registerTool(
    server,
    "labs_google_domain_intersection",
    z.object({
      domains: z.array(z.string()).min(2).max(20).describe("Domains to compare"),
      location_code: z.number().optional().describe("The location code for the search"),
      language_code: z.string().optional().describe("The language code for the search"),
      limit: z.number().optional().describe("Maximum number of results to return"),
      offset: z.number().optional().describe("Offset for pagination"),
      filters: z.array(z.any()).optional().describe("Filters to apply to the results")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/domain_intersection/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Subdomains
  registerTool(
    server,
    "labs_google_subdomains",
    domainResearchBaseSchema.extend({
      filters: z.array(z.any()).optional().describe("Filters to apply to the results")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/subdomains/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Relevant Pages
  registerTool(
    server,
    "labs_google_relevant_pages",
    domainResearchBaseSchema.extend({
      filters: z.array(z.any()).optional().describe("Filters to apply to the results")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/relevant_pages/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Bulk Traffic Estimation
  registerTool(
    server,
    "labs_google_bulk_traffic_estimation",
    z.object({
      targets: z.array(z.string()).describe("Domains to estimate traffic for"),
      location_code: z.number().optional().describe("The location code for the search"),
      language_code: z.string().optional().describe("The language code for the search")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/google/bulk_traffic_estimation/live",
        [params]
      );
      
      return response;
    }
  );
  
  // Amazon API for DataForSEO Labs
  // Bulk Search Volume
  registerTool(
    server,
    "labs_amazon_bulk_search_volume",
    z.object({
      keywords: z.array(z.string()).describe("Keywords to get search volume for"),
      location_code: z.number().optional().describe("The location code for the search"),
      language_code: z.string().optional().describe("The language code for the search")
    }),
    async (params, client) => {
      const response = await client.post<DataForSeoResponse<any>>(
        "/dataforseo_labs/amazon/bulk_search_volume/live",
        [params]
      );
      
      return response;
    }
  );
}