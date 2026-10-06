import http from "node:http";
import { getDataFromDB } from "./database/db.js";

// Create a local server to receive data from
const PORT = 3001


const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    if (req.url === '/api' && req.method === 'GET') {
        res.end(JSON.stringify(destinations))
    }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`))
