const AbstractManager = require("./AbstractManager");

class NewsManager extends AbstractManager {
  static table = "news";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = NewsManager;
