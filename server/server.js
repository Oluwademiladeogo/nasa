require("dotenv").config();
const app = require("./app");
const http = require("http");
const port = 3001;
const server = http.createServer(app);
const env = process.env.NODE_ENV;
const { loadPlanetsData } = require("./models/planets.model");
const startServer = async () => {
  await loadPlanetsData();
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
startServer();
