//incluir biblioteca de conexão
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "senai",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function checkConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to the database");
    connection.release();
  } catch (err) {
    console.error("Error connecting to the database:", err);
    setTimeout(checkConnection, 2000); // Tentar reconectar após 2 segundos
  }
}

async function monitorConnection() {
  while (true) {
    try {
      const connection = await pool.getConnection();
      await connection.ping();
      console.log("Database connection is alive");
      connection.release();
    } catch (err) {
      console.error("Database connection lost. Attempting to reconnect:", err);
      await checkConnection();
    }
    await new Promise(resolve => setTimeout(resolve, 60000)); // Verificar a cada minuto
  }
}

checkConnection();
monitorConnection();

module.exports = pool;


//module.exports = client;