const express = require('express');

const OrdersService = require('../services/orderService')
const validatorHandler = require('../middlewares/validatorHandler');
const { createOrderSchema, getOrderSchema, addItemSchema } = require('../schemas/orderSchema');

const router = express.Router();
const service = new OrdersService();

router.get('/', (req, res) => {

  res.json([]);
});

router.get("/:id",
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error)
    }

  });


router.post("/",
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const { body } = req;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
  });

router.post("/add-item",
  validatorHandler(addItemSchema, 'body'),
  async (req, res) => {
    const { body } = req;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem);
  });

module.exports = router;
