import { Router } from "express";

export const router = Router();

router.get("/users", (_req, res) => {
  res.json([
    { name: "ash", age: 10 },
    { name: "Mestre Came", age: 300 },
    { name: "Alucard", age: 500 },
  ]);
});
// route params
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const user = [
    { id: 1, name: "ash", age: 10 },
    { id: 2, name: "Mestre Came", age: 300 },
    { id: 3, name: "Alucard", age: 500 },
  ];
  res.json(user[0]);
});

router.get("/user", (req, res) => {
  const { id, name } = req.query;
  res.json({ id, name });
});

// body params

router.post("/user", (req, res) => {
    const { id, name, value } = req.body;
    res.json({ id, name, value });
  });