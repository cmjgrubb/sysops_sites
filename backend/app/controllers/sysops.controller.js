const db = require("../models");
const Sysops = db.sysops;

// Create and save a new site
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a site
  const sysops = new Sysops({
    Name: req.body.Name,
    Address: req.body.Address,
    SerialNo: req.body.SerialNo,
    PhoneProvider: req.body.PhoneProvider,
    InternetProvider: req.body.InternetProvider,
    LandlineNumber: req.body.LandlineNumber,
    CellularNumber: req.body.CellularNumber,
    PublicIP: req.body.PublicIP,
    Subnet: req.body.Subnet,
    PlcIP: req.body.PlcIP,
    PlcMAC: req.body.PlcMAC,
    PlcMake: req.body.PlcMake,
    PlcModel: req.body.PlcModel,
    PlcInstallDate: req.body.PlcInstallDate,
    PanelIP: req.body.PanelIP,
    PanelMAC: req.body.PanelMAC,
    PanelMake: req.body.PanelMake,
    PanelModel: req.body.PanelModel,
    PanelInstallDate: req.body.PanelInstallDate,
    PanelOS: req.body.PanelOS,
    PanelHMI: req.body.PanelHMI,
    PumpControlPanelIP: req.body.PumpControlPanelIP,
    PumpControlPanelMAC: req.body.PumpControlPanelMAC,
  });

  // Save the new site in the database
  sysops
    .save(sysops)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the site.",
      });
    });
};

// Retrieve all sites from the database.
exports.findAll = (req, res) => {
  const Name = req.query.Name;
  var condition = Name
    ? { Name: { $regex: new RegExp(Name), $options: "i" } }
    : {};

  Sysops.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the sysops sites.",
      });
    });
};

// Find a single site with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sysops.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Site with id " + id + "not found." });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving site with id=" + id });
    });
};

// Update a site by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Sysops.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update site with id=${id}. Site not found.`,
        });
      } else res.send({ message: "Site was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating site with id=" + id + ".",
      });
    });
};

// Delete a site with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Sysops.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete site with id=${id}. Site not found.`,
        });
      } else {
        res.send({
          message: "Site was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete site with id=" + id + ".",
      });
    });
};
