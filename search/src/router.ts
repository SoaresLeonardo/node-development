import { Router } from "express";
import { FindProductsController } from "./controllers/FindProducts";

const router = Router();

const findProductsController = new FindProductsController();

router.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

router.get("/search", findProductsController.handle);

export { router };
