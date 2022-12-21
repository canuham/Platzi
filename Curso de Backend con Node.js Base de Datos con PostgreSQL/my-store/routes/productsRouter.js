const express = require('express');
const ProductsService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema } = require('../schemas/productSchema');


const router = express.Router();
const service = new ProductsService();

router.get("/",
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error)
    }

  });

router.get("/filter", (req, res) => { // -Todo lo que sea especifico debe ir antes de los endpoints dinamicos. si estuviera despues de "products/:id" se llamaria el mismo"
  res.send("Yo soy un filter");
});

router.get("/:id",
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error)
    }

  });

router.post("/",
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const { body } = req;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  });

router.patch("/:id",
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body, params: { id } } = req;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error)
    }

  });

router.put("/:id", async (req, res) => {
  const { body, params: { id } } = req;
  const product = await service.update(id, body);
  res.json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
