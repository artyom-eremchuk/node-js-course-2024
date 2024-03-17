import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/v1.0/contacts", (req, res) => {
  res.send("getAll");
});

app.get("/api/v1.0/contacts/:id", (req, res) => {
  res.send("getOne");
});

app.post("/api/v1.0/contacts", (req, res) => {
  res.send("create");
});

app.patch("/api/v1.0/contacts/:id", (req, res) => {
  res.send("patch");
});

app.delete("/api/v1.0/contacts/:id", (req, res) => {
  res.send("delete");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
