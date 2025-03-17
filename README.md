# DataForSEO MCP Server

A comprehensive stdio MCP (Model Context Protocol) server for DataForSEO API. This server allows LLMs (Large Language Models) to interact with all DataForSEO API functions.

## Features

- Implements the full DataForSEO API as MCP tools
- Uses stdio transport for easy integration with LLM platforms
- Covers all major DataForSEO API categories:
  - SERP API
  - Keywords Data API
  - Domain Analytics API
  - DataForSEO Labs API
  - Backlinks API
  - OnPage API
  - Content Analysis API
  - Content Generation API
  - Merchant API
  - App Data API
  - Business Data API

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

To use this MCP server, you need DataForSEO API credentials. Run the server with:

```bash
# Set environment variables for authentication
export DATAFORSEO_LOGIN="your_login"
export DATAFORSEO_PASSWORD="your_password"

# Run the server
npm start
```

## Development

```bash
# Run in development mode with hot reloading
npm run dev
```

## License

MIT