const models = require("../models");

class ArticleController {
  static add = (req, res) => {
    const article = req.body;

    models.article
      .insert(article)
      .then(([result]) => {
        res.status(201).send({ ...article, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ArticleController;
