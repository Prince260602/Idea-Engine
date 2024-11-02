const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db.js");
const cors = require("cors");

app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server due to Uncaught Exception");
    process.exit(1);
});

// Config
dotenv.config({ path: "config/config.env" });

// Connecting to database
connectDatabase();

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
  });



// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});
