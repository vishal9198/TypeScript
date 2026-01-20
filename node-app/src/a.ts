const express = require("express");
const app = express();

enum ResponseStatus {
  success = 200,
  notfound = 404,
  Error = 500,
}

app.get("/", (req, res) => {
  if (!req.body.userId) {
    res.status(ResponseStatus.notfound).json({
      success: "failure",
    });
  }
});
