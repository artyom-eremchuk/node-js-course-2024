import express from "express";
import DatabaseService from "./database-service.js";
import bodyParser from "body-parser";

const db = new DatabaseService();
const app = express();
const PORT = 3002;

app.use(express.static("public/dist"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/api/v1.0/contacts", (req, res) => {
  const allData = db.getAll();
  res.send(allData);
});

app.get("/api/v1.0/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(500);
    res.send({ error: "ERROR 500" });
    return;
  }

  const oneItem = db.getOne(id);

  if (!oneItem) {
    res.status(404);
    res.send({ error: `Item with ID ${id} not found` });
    return;
  }

  res.send(oneItem);
});

app.post("/api/v1.0/contacts", (req, res) => {
  const data = req.body;

  if (!db.create(data)) {
    res.status(500);
    res.send({ error: `Error 500 with creating item ${id}` });
    return;
  }

  res.status(201);
  res.send(data);
});

app.patch("/api/v1.0/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(500);
    res.send({ error: "ERROR 500" });
    return;
  }

  const oneItem = db.getOne(id);

  if (!oneItem) {
    res.status(404);
    res.send({ error: `Item with ID ${id} not found` });
    return;
  }

  const data = req.body;

  if (!db.update(id, data)) {
    res.status(500);
    res.send({ error: `Error 500 with updating item ${id}` });
    return;
  }

  res.status(200);
  res.send(data);
});

app.delete("/api/v1.0/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(500);
    res.send({ error: "ERROR 500" });
    return;
  }

  const oneItem = db.getOne(id);

  if (!oneItem) {
    res.status(404);
    res.send({ error: `Item with ID ${id} not found` });
    return;
  }

  if (db.delete(id)) {
    res.status(204);
    res.end();
  } else {
    res.status(500);
    res.send({ error: `Error 500 with deleting item ${id}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
