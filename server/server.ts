import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:5173",
  })
);

server.get("/todos", (req, res) => {
  console.log("HURRAAAAAY ITS A GET REQUEST");

  res.status(200).json({
    message: "hello world",
    decription: "this is a get request",
  });
});

server.post("/todos", (req, res) => {
  console.log("HURRAAAAAY ITS A POST REQUEST");
  console.log(req.body);

  res.json({
    message: "hello world",
    decription: "this is a post request",
    dataArrived: req.body,
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
