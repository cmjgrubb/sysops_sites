module.exports = (app) => {
  const sysops = require("../controllers/sysops.controller.js");

  var router = require("express").Router();

  // Create a new site
  router.post("/", sysops.create);

  // Retrieve all sites
  router.get("/", sysops.findAll);

  // Retrieve a single site with id
  router.get("/:id", sysops.findOne);

  // Update a site with id
  router.put("/:id", sysops.update);

  // Delete a site with id
  router.delete("/:id", sysops.delete);

  app.use("/api/sysops", router);
};
