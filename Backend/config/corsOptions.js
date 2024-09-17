// const allowedOrigins = require("./allowedOrigins")

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  // origin: ["https://mern-post-it.vercel.app/", "http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Added OPTIONS here
  allowedHeaders: ["Content-Type", "Authorization"],
}
// const corsOptions = {
//   origin: (origin, callback) => {
//     return callback(null, true)
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// }

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (origin === "https://ziraa.netlify.app/") {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// }

module.exports = corsOptions
