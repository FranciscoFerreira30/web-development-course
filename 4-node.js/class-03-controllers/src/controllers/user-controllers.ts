import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { name, series } = req.body;
    console.log({ name, series });

    res.status(201).json({ message: "user created" });
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} read` });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, series } = req.body;

    console.log({ id, name, series });

   res.status(200).json({ message: `user update` });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} deleted` });
  },
};
