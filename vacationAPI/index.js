import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { getDataByPath } from "./utils/getDataByPath.js";
import { getDataByQuery } from "./utils/getDataByQuery.js";
import { sendJSON } from "./utils/sendJSONResponse.js"

// Create a local server to receive data from
const PORT = 3001


const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const queryObj = Object.fromEntries(urlObj.searchParams)

  if (urlObj.pathname === '/api' && req.method === 'GET') {
    let filteredData = getDataByQuery(destinations, queryObj)


    sendJSON(res, 200, filteredData)
  }
  
  else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = getDataByPath( destinations, "continent", continent);
    sendJSON(res, 200, filteredData);
  } 

   else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = getDataByPath(destinations, "country", country);
    sendJSON(res, 200, filteredData);
  } 
  
  else {
    sendJSON(res, 404, {
      error: "not found",
      message: "The requested route does not exist",
    });
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
