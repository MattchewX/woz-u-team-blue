var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.menuItem.findAll().then(menuItems => res.json(menuItems));
});

router.post("/", function(req, res, next) {
  let menuItem = new models.menuItem();
  newMenuItem.name = req.body.name;
  newMenuItem.description = req.body.description;
  newMenuItem.price = req.body.price;
  newMenuItem.save().then(menuItem => res.json(menuItem));
});

router.delete("/:id", function(req, res, next) {
  let menuItemId = parseInt(req.params.id);
  models.menuItem.findByPk(menuItemId)
    .then(menuItem => menuItem.destroy())
    .then(() => res.send({ menuItemId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.menuItem.update(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(menuItem => res.json(menuItem));
});

module.exports = router;
