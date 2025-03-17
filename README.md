# DataForSEO MCP Server

A comprehensive stdio MCP (Model Context Protocol) server for the DataForSEO API. This server allows LLMs (Large Language Models) to interact with all DataForSEO API functions.

## Overview

The DataForSEO MCP Server enables seamless integration between LLMs like Claude and the DataForSEO API, making it possible to perform SEO analysis, keyword research, backlink analysis, and many other SEO-related tasks directly through natural language interactions.

This implementation exposes all major DataForSEO API endpoints as MCP tools, which LLMs can call to retrieve specific SEO data. The server uses stdio as its transport layer, making it easy to integrate with various LLM platforms.

## Features

- Comprehensive coverage of DataForSEO API endpoints
- Stdio transport for easy integration
- Authentication handling
- Detailed error reporting
- Type-safe tool definitions with Zod schemas
- Covers all major DataForSEO API categories:

### Implemented API Categories

1. **SERP API** - Search engine results data from Google, Bing, Yahoo, and more
2. **Keywords Data API** - Keyword research, suggestions, and search volume data
3. **DataForSEO Labs API** - Advanced SEO analytics, domain comparisons, and keyword analysis
4. **Backlinks API** - Backlink profiles, referring domains, and anchor text analysis
5. **OnPage API** - Website audit, content analysis, and technical SEO checks
6. **Domain Analytics API** - Technology stack detection and domain data analysis
7. **Content Analysis API** - Content quality evaluation and semantic analysis
8. **Content Generation API** - AI-powered content generation tools
9. **Merchant API** - E-commerce data from Amazon and Google Shopping
10. **App Data API** - Mobile app data from Google Play and App Store
11. **Business Data API** - Business listing data from Google My Business, Trustpilot, and more

## Installation

```bash
# Clone the repository
git clone https://github.com/Skobyn/dataforseo-mcp-server.git

# Change to the project directory
cd dataforseo-mcp-server

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

To use this MCP server, you need DataForSEO API credentials. You can sign up for a DataForSEO account at [dataforseo.com](https://dataforseo.com/).

### Running the Server

```bash
# Set environment variables for authentication
export DATAFORSEO_LOGIN="your_login"
export DATAFORSEO_PASSWORD="your_password"

# Run the server
npm start
```

### Using with Claude or other LLMs

This server implements the Model Context Protocol, which allows LLMs to interact with external systems in a standardized way. To use it with Claude, you'll need to integrate it with your LLM platform according to their specific MCP implementation.

See the examples directory for usage examples.

## Development

```bash
# Run in development mode with hot reloading
npm run dev
```

## Examples

Check out the `examples` directory for sample code showing how to use the DataForSEO MCP Server.

The basic example demonstrates:
- Starting the server
- Connecting to it from a client
- Making calls to different API endpoints
- Handling the results

## Available Tools

The server exposes hundreds of tools across all DataForSEO API categories. Below are some examples of the most commonly used tools:

### SERP API Tools
- `serp_google_organic_live` - Get Google organic search results
- `serp_google_organic_task_post` - Create a Google organic search task
- `serp_google_maps_live` - Get Google Maps search results

### Keywords Data Tools
- `keywords_google_ads_search_volume` - Get search volume for keywords
- `keywords_google_ads_keywords_for_site` - Get keyword suggestions for a domain
- `keywords_google_trends_explore` - Explore keyword trends over time

### DataForSEO Labs Tools
- `labs_google_keyword_ideas` - Get keyword ideas based on seed keywords
- `labs_google_related_keywords` - Get related keywords
- `labs_google_domain_rank_overview` - Get domain ranking overview

### Backlinks Tools
- `backlinks_summary` - Get a summary of a domain's backlink profile
- `backlinks_backlinks` - Get a list of backlinks for a domain
- `backlinks_referring_domains` - Get referring domains for a target

### Complete Tool List

For a complete list of all available tools and their parameters, check the implementation in the `src/api` directory.

## License

MIT