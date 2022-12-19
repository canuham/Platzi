const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  const { limit, offset } = req.query; // Query params http://localhost:3000/users?limit=10&offset=200
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("No hay parametros");
  }
});

module.exports = router;
