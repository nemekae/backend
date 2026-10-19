# Destinations API

A lightweight REST API built with Node.js's native HTTP module to retrieve and filter destination data by query parameters, continent, or country.

## Features

- Retrieve all destinations with optional query filtering.
- Filter destinations by continent.
- Filter destinations by country.
- Return JSON responses with appropriate HTTP status codes.
- Uses a database utility to retrieve destination data.

## Tech Stack

- Node.js
- Native HTTP module
- JavaScript (ES Modules)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- The project database and utility modules configured.

### Run the Server

```bash
node server.js
```

The server runs at:

```text
http://localhost:3001
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api` | Retrieve destinations |
| GET | `/api?key=value` | Filter destinations using query parameters |
| GET | `/api/continent/:continent` | Filter destinations by continent |
| GET | `/api/country/:country` | Filter destinations by country |

### Examples

```http
GET /api
GET /api?country=Nigeria
GET /api/continent/Africa
GET /api/country/Nigeria
```

## Response Format

Successful requests return JSON data with a `200 OK` status.

Unknown routes return a `404 Not Found` response:

```json
{
  "error": "not found",
  "message": "The requested route does not exist"
}
```

## Project Structure

```text
.
├── server.js
├── database/
│   └── db.js
└── utils/
    ├── getDataByPath.js
    ├── getDataByQuery.js
    └── sendJSONResponse.js
```

## How It Works

1. Retrieves destination data from the database.
2. Parses the request URL and query parameters.
3. Filters the data based on the requested endpoint.
4. Returns the results as a JSON response.

## License

Specify a license if this project is intended for public distribution.