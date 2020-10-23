const express = require("express");

const router = express.Router();

module.exports = () => {
  router.post("/api/postHandler", (req, res) => {
    console.dir(req.body);

    var recData = req.body;
    recData.staffID = 123;
    res.json(recData);
  });

  return router;
};
