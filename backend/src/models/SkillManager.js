const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }

  insert(skill) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      skill.name,
    ]);
  }

  update(skill) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [skill.name, skill.id]
    );
  }
}

module.exports = SkillManager;
