require("dotenv").config();
const { Pool } = require("pg");

const connectionString = "postgresql://postgres:dXSUNYYNXEmCIPCJcmZUhzChkniqzLHm@crossover.proxy.rlwy.net:15397/railway";

// All of the following properties should be read from environment variables
module.exports = new Pool({
  connectionString,
});
