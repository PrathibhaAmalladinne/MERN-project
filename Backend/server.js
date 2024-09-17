require("dotenv").config()
const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const rateLimit = require("express-rate-limit")
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")

const PORT = process.env.PORT || 3500 // Provide a default port

console.log(process.env.NODE_ENV)

// CORS configuration
app.use(cors(corsOptions))
app.options("*", cors(corsOptions)) // Enable preflight across-the-board

// Trust first proxy
app.set("trust proxy", 1)

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
})
app.use(limiter)

// Built-in middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/root"))
app.use("/users", require("./routes/userRoutes"))
app.use("/notes", require("./routes/noteRoutes"))
app.use("/auth", require("./routes/authRoutes"))

// Connect to database
connectDB()

// 404 handler
app.all("*", (req, res) => {
  res.status(404)
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"))
  } else if (req.accepts("json")) {
    res.json({ message: "404 NOT FOUND" })
  } else {
    res.type("txt").send("404 Not Found")
  }
})

// Error handler
app.use(errorHandler)

// Start server
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server running on port ${PORT}`)
  )
})

mongoose.connection.on("error", (err) => {
  console.log(err)
})
