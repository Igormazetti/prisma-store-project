import { Request, Response, NextFunction } from "express";

export const productsMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { title, quantity } = request.body;

  if (!title || title === "" || !quantity) {
    return response.status(400).json({ message: "Missing parameters" });
  }

  return next();
};
