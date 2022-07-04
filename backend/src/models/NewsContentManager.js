const AbstractManager = require("./AbstractManager");
const NewsManager = require("./NewsManager");

class NewsContentManager extends AbstractManager {
  static table = "newscontent";

  findAll() {
    return this.connection.query(
      `select newscontent.id, title, text, language_code, news.id as news_id from  ${this.table} INNER JOIN ${NewsManager.table} ON newscontent.news_id = news.id`
    );
  }

  find(id) {
    return this.connection.query(
      `select newscontent.id, title, text, language_code, news.id as news_id from  ${this.table} INNER JOIN ${NewsManager.table} WHERE newscontent.news_id = news.id AND  newscontent.id = ?`,
      [id]
    );
  }

  update(newscontent) {
    return this.connection.query(
      `update ${NewsContentManager.table} set title = ?,  text = ? where id = ?`,
      [newscontent.title, newscontent.text, newscontent.id]
    );
  }
}
module.exports = NewsContentManager;
