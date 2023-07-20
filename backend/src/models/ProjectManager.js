const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      project.name,
    ]);
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [project.name, project.id]
    );
  }
}

module.exports = ProjectManager;
