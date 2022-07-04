const models = require("../models");

class NewsController {
  static table = "news";

  static browse = (req, res) => {
    models.news
      .findAll()
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static read = (req, res) => {
    models.news
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = NewsController;
