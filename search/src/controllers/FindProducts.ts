import { Request, Response } from "express";
import { client } from "../db/client";

export class FindProductsController {
  async handle(req: Request, res: Response) {
    const { search, take, skip } = req.query;

    const result = await client.product.findMany({
      where: {
        name: {
          contains: String(search),
          mode: "insensitive",
        },
      },
      take: Number(take),
      skip: Number(skip)
    });

    return res.json(result);
  }
}
