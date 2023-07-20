
CREATE TABLE skill (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  type ENUM('hard', 'soft')  DEFAULT 'hard',
  image VARCHAR(50)
);

CREATE TABLE project (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NULL,
  url VARCHAR(50),
  img_url VARCHAR(50),
  start_date DATE,
  end_date DATE,
  skill_id INT UNSIGNED,
  FOREIGN KEY (skill_id) REFERENCES skill (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT into skill (name,image) 
VALUES ('HTML','../skillslogos/html.png'),('CSS','../skillslogos/css.png'),('JS','../skillslogos/js.png'),('REACT.JS','../skillslogos/react.png'),('NODE.JS','../skillslogos/node.png')
   ,('SQL','../skillslogos/sql.png'),('mySQL','../skillslogos/mysql.png'),('Git','../skillslogos/git.png'),('GitHub','../skillslogos/github.png');